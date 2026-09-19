import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2u2_tbpp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2u2_tbpp"/>`,
		"fallback": "fluent-mdl2:receipt-forward",
	});
}

export default Component;
