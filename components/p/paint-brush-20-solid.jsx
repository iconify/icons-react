import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3imq2azo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3imq2azo"/>`,
		"fallback": "heroicons:paint-brush-20-solid",
	});
}

export default Component;
