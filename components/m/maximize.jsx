import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn1n6ybcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn1n6ybcu"/>`,
		"fallback": "mage:maximize",
	});
}

export default Component;
