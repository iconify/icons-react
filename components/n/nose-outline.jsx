import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cws1dcbbc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cws1dcbbc"/>`,
		"fallback": "pinhead:nose-outline",
	});
}

export default Component;
