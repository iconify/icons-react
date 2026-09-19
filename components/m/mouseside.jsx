import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2ae4oflk.css';
import '../../css/j/j0_e7b10j.css';
import '../../css/c/c7ynm7bfe.css';
import '../../css/g/gemjqib7p.css';
import '../../css/e/ete7mhz0y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2ae4oflk"/><path class="j0_e7b10j"/><path class="c7ynm7bfe"/><path class="gemjqib7p"/><path class="ete7mhz0y"/>`,
		"fallback": "fxemoji:mouseside",
	});
}

export default Component;
