import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdpu8s45u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdpu8s45u"/>`,
		"fallback": "mingcute:mat-line",
	});
}

export default Component;
