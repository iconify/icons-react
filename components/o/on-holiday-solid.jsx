import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po68ny4my.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po68ny4my"/>`,
		"fallback": "clarity:on-holiday-solid",
	});
}

export default Component;
