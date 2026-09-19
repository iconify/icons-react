import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kmx79eb_z.css';
import '../../css/y/y6kzpsbiz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kmx79eb_z"/><path class="y6kzpsbiz"/></g>`,
		"fallback": "bi:tux",
	});
}

export default Component;
