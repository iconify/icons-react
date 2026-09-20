import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddy8e-r4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ddy8e-r4b"/>`,
		"fallback": "solar:square-double-alt-arrow-up-outline",
	});
}

export default Component;
