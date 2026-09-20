import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu3gc5mnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tu3gc5mnc"/>`,
		"fallback": "solar:temperature-bold",
	});
}

export default Component;
