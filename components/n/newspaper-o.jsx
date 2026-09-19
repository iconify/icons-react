import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j55fwyb9u.css';

const viewBox = {"width":2048,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j55fwyb9u"/>`,
		"fallback": "fa:newspaper-o",
	});
}

export default Component;
