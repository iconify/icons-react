import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpl66qxdr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cpl66qxdr"/>`,
		"fallback": "streamline:open-book-solid",
	});
}

export default Component;
