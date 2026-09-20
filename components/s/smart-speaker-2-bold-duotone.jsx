import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/rld7fjmad.css';
import '../../css/d/dj3ck_bbc.css';
import '../../css/u/u_7rqwvjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="rld7fjmad"/><path class="dj3ck_bbc"/></g><path class="u_7rqwvjf"/></g>`,
		"fallback": "solar:smart-speaker-2-bold-duotone",
	});
}

export default Component;
