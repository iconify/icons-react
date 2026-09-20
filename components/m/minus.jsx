import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap8ygib1z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap8ygib1z"/>`,
		"fallback": "uiw:minus",
	});
}

export default Component;
