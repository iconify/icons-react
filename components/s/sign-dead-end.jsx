import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/px9p0nb-c.css';
import '../../css/e/epyv5-bje.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="px9p0nb-c"/><path class="epyv5-bje"/></g>`,
		"fallback": "bi:sign-dead-end",
	});
}

export default Component;
