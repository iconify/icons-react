import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecu-v9ahp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecu-v9ahp"/>`,
		"fallback": "boxicons:minus-plus",
	});
}

export default Component;
