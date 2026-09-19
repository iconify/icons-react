import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ark4w8oht.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ark4w8oht"/>`,
		"fallback": "heroicons:paint-brush-16-solid",
	});
}

export default Component;
