import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv21ox71h.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv21ox71h"/>`,
		"fallback": "lineicons:ruler-1",
	});
}

export default Component;
