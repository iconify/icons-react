import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsl8n5bnw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsl8n5bnw"/>`,
		"fallback": "ion:social-pinterest-outline",
	});
}

export default Component;
