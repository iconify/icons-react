import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihf03qhvk.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihf03qhvk"/>`,
		"fallback": "wi:night-partly-cloudy",
	});
}

export default Component;
