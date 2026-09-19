import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2yml2zvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2yml2zvm"/>`,
		"fallback": "hugeicons:store-remove-01",
	});
}

export default Component;
