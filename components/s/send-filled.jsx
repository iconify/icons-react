import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4tsc3dmt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4tsc3dmt"/>`,
		"fallback": "carbon:send-filled",
	});
}

export default Component;
