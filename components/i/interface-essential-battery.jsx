import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du8dgffkn.css';
import '../../css/m/m0gaflbql.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du8dgffkn"/><path class="m0gaflbql"/>`,
		"fallback": "streamline-pixel:interface-essential-battery",
	});
}

export default Component;
