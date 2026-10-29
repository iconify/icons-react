import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/prnexjb1i.css';
import '../../css/r/rvo8e2pwf.css';
import '../../css/l/lx6vztc2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="prnexjb1i"/><path class="rvo8e2pwf wm-shadow"/><path class="lx6vztc2v"/></g>`,
		"fallback": "withicons:lamp-desk-engrave",
	});
}

export default Component;
