import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qodm7xjge.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qodm7xjge"/>`,
		"fallback": "ix:photo-camera-filled",
	});
}

export default Component;
