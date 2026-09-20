import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgnr07vat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mgnr07vat"/>`,
		"fallback": "solar:text-italic-square-bold",
	});
}

export default Component;
