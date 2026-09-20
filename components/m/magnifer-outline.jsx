import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd9w4b9sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hd9w4b9sz"/>`,
		"fallback": "solar:magnifer-outline",
	});
}

export default Component;
