import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu6eqibhi.css';
import '../../css/n/n6mum1zrt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu6eqibhi"/><path class="n6mum1zrt"/>`,
		"fallback": "carbon:tablet",
	});
}

export default Component;
