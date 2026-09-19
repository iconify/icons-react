import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mjkvh7bky.css';
import '../../css/e/eusfqkb9k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mjkvh7bky"/><path class="eusfqkb9k"/></g>`,
		"fallback": "bi:link",
	});
}

export default Component;
