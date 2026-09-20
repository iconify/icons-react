import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc9f10m7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc9f10m7t"/>`,
		"fallback": "mdi:text-box-minus-outline",
	});
}

export default Component;
