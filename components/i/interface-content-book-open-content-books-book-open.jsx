import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmbmllbkf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmbmllbkf"/>`,
		"fallback": "streamline:interface-content-book-open-content-books-book-open",
	});
}

export default Component;
