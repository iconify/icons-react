import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvwtv3ouv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvwtv3ouv"/>`,
		"fallback": "la:stripe-s",
	});
}

export default Component;
