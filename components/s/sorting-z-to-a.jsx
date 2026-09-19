import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wavd5lb8u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wavd5lb8u"/>`,
		"fallback": "carbon:sorting-z-to-a",
	});
}

export default Component;
