import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ctzgm-bvh.css';
import '../../css/e/epyv5-bje.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ctzgm-bvh"/><path class="epyv5-bje"/></g>`,
		"fallback": "bi:sign-intersection-t",
	});
}

export default Component;
