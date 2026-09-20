import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qte_x3bul.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qte_x3bul"/>`,
		"fallback": "raphael:mic",
	});
}

export default Component;
