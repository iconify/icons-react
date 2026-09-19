import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j7cm38bro.css';
import '../../css/u/ucvbn7bhd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j7cm38bro"/><path class="ucvbn7bhd"/></g>`,
		"fallback": "bi:mic-mute-fill",
	});
}

export default Component;
