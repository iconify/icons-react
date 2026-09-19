import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te9cf7zxk.css';

const viewBox = {"width":1024,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te9cf7zxk"/>`,
		"fallback": "whh:sheep",
	});
}

export default Component;
