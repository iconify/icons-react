import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps15tebrb.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps15tebrb"/>`,
		"fallback": "lineicons:layout-9",
	});
}

export default Component;
