import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o08-cac6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o08-cac6u"/>`,
		"fallback": "solar:planet-3-outline",
	});
}

export default Component;
