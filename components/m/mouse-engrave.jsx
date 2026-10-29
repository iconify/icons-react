import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sb5v5hbei.css';
import '../../css/o/oghnc41ik.css';
import '../../css/l/l7k0l-tlx.css';
import '../../css/m/mm8lkn_5j.css';
import '../../css/d/dxo27vb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sb5v5hbei wm-k"/><path class="oghnc41ik wm-a"/><path class="l7k0l-tlx wm-shadow"/><path class="mm8lkn_5j wm-k"/><path class="dxo27vb0f wm-a"/></g>`,
		"fallback": "withicons:mouse-engrave",
	});
}

export default Component;
