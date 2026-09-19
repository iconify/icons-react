import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jadl1ismj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jadl1ismj"/>`,
		"fallback": "icons8:old-time-camera",
	});
}

export default Component;
