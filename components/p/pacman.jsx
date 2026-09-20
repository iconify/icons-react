import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tmgj_kpmh.css';
import '../../css/f/f-dxx_b_g.css';
import '../../css/f/f5gkp-bol.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tmgj_kpmh"/><path class="f-dxx_b_g"/><path class="f5gkp-bol"/></g>`,
		"fallback": "streamline-color:pacman",
	});
}

export default Component;
