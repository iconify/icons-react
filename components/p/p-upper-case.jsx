import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8hrerbig.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8hrerbig"/>`,
		"fallback": "whh:p-upper-case",
	});
}

export default Component;
