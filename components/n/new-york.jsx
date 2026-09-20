import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z22cmu4ni.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z22cmu4ni"/>`,
		"fallback": "pinhead:new-york",
	});
}

export default Component;
