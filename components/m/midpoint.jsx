import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsky6xb8j.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsky6xb8j"/>`,
		"fallback": "system-uicons:midpoint",
	});
}

export default Component;
