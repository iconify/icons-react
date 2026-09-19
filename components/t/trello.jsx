import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0jn04mof.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0jn04mof"/>`,
		"fallback": "fa6-brands:trello",
	});
}

export default Component;
