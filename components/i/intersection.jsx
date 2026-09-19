import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2617zdcb.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2617zdcb"/>`,
		"fallback": "fa-solid:intersection",
	});
}

export default Component;
