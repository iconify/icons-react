import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur6p-47xu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur6p-47xu"/>`,
		"fallback": "osmic:luggage-14",
	});
}

export default Component;
