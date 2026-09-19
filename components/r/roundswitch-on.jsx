import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e658-774s.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e658-774s"/>`,
		"fallback": "fad:roundswitch-on",
	});
}

export default Component;
