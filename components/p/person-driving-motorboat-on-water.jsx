import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny9vn34ky.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny9vn34ky"/>`,
		"fallback": "pinhead:person-driving-motorboat-on-water",
	});
}

export default Component;
