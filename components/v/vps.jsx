import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnu-9ccgl.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnu-9ccgl"/>`,
		"fallback": "whh:vps",
	});
}

export default Component;
