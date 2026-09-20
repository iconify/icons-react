import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_bo_ccyx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_bo_ccyx"/>`,
		"fallback": "streamline:smoke-detector",
	});
}

export default Component;
