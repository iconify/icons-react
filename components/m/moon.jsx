import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg-aufe2f.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg-aufe2f"/>`,
		"fallback": "oi:moon",
	});
}

export default Component;
