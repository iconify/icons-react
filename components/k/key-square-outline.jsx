import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z10jvkbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z10jvkbzu"/>`,
		"fallback": "solar:key-square-outline",
	});
}

export default Component;
