import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht6fsttpr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht6fsttpr"/>`,
		"fallback": "whh:magnet",
	});
}

export default Component;
