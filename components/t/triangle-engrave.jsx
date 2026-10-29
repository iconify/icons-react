import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a5lu4obqm.css';
import '../../css/f/fzy7xu4pc.css';
import '../../css/m/m3y59dfla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a5lu4obqm wm-k"/><path class="fzy7xu4pc wm-shadow"/><path class="m3y59dfla wm-k"/></g>`,
		"fallback": "withicons:triangle-engrave",
	});
}

export default Component;
