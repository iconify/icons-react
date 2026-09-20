import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxdvh4q1y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fxdvh4q1y"/>`,
		"fallback": "streamline:voice-scan-2-solid",
	});
}

export default Component;
