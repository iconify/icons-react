import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufsfxe4uy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufsfxe4uy"/>`,
		"fallback": "ri:money-rupee-circle-line",
	});
}

export default Component;
