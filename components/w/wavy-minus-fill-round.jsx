import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaoiwm7ah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaoiwm7ah"/>`,
		"fallback": "coolicons:wavy-minus-fill-round",
	});
}

export default Component;
