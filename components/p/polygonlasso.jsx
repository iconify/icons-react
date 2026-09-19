import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxj4sybpu.css';

const viewBox = {"width":1025,"height":1026};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxj4sybpu"/>`,
		"fallback": "whh:polygonlasso",
	});
}

export default Component;
