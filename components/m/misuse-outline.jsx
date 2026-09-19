import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdl8c9zis.css';
import '../../css/y/ydhwbwb1q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdl8c9zis"/><path class="ydhwbwb1q"/>`,
		"fallback": "carbon:misuse-outline",
	});
}

export default Component;
