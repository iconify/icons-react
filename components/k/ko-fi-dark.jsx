import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9qqxib9s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9qqxib9s"/>`,
		"fallback": "selfhst:ko-fi-dark",
	});
}

export default Component;
