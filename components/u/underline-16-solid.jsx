import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydcngk_0q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ydcngk_0q"/>`,
		"fallback": "heroicons:underline-16-solid",
	});
}

export default Component;
