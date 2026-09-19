import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m28dodbbb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m28dodbbb"/>`,
		"fallback": "bpmn:transaction",
	});
}

export default Component;
