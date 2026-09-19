import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4pv5dbjb.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4pv5dbjb"/>`,
		"fallback": "whh:triangle",
	});
}

export default Component;
