import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve7t91bkh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve7t91bkh"/>`,
		"fallback": "game-icons:triton-head",
	});
}

export default Component;
