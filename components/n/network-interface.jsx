import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltxah4b-w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltxah4b-w"/>`,
		"fallback": "carbon:network-interface",
	});
}

export default Component;
