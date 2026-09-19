import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qddov17ip.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qddov17ip"/>`,
		"fallback": "carbon:right-panel-close-filled",
	});
}

export default Component;
