import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru9u8d0sx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ru9u8d0sx"/>`,
		"fallback": "qlementine-icons:plier-16",
	});
}

export default Component;
