import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhb8c01ug.css';
import '../../css/y/yeq9_s_cg.css';
import '../../css/c/c1y_6pbkx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hhb8c01ug"><path class="yeq9_s_cg"/><path class="c1y_6pbkx"/></g>`,
		"fallback": "catppuccin:reason",
	});
}

export default Component;
