import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxy7-ob-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oxy7-ob-h"/>`,
		"fallback": "solar:shield-cross-bold",
	});
}

export default Component;
