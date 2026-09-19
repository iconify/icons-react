import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fkgs8cb4p.css';
import '../../css/l/lyesv9buc.css';
import '../../css/t/t_b2msbub.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fkgs8cb4p"/><path class="lyesv9buc"/><path class="t_b2msbub"/></g>`,
		"fallback": "fluent-emoji-high-contrast:snowman",
	});
}

export default Component;
