import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cgb4cpr-x.css';
import '../../css/o/o_ka54b_n.css';
import '../../css/x/xaz3ysbci.css';
import '../../css/f/fbow-u9gb.css';
import '../../css/x/xd-wgubdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cgb4cpr-x"/><path class="o_ka54b_n wm-k"/><path class="wm-k xaz3ysbci"/><path class="fbow-u9gb wm-a"/><path class="wm-s xd-wgubdy"/></g>`,
		"fallback": "withicons:siren-sketch",
	});
}

export default Component;
