import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6yo2cn0w.css';

const viewBox = {"width":118,"height":27};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6yo2cn0w"/>`,
		"fallback": "thesvg-color:paramount-light",
	});
}

export default Component;
