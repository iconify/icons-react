import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td6u0lbzc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td6u0lbzc"/>`,
		"fallback": "pinhead:surprised-face-in-circle",
	});
}

export default Component;
