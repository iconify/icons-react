import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owo7uxusz.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owo7uxusz"/>`,
		"fallback": "lineicons:vector-nodes-7",
	});
}

export default Component;
