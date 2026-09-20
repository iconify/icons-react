import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqkav9c8l.css';
import '../../css/b/bpfu64dcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqkav9c8l"/><path class="bpfu64dcz"/>`,
		"fallback": "streamline-freehand:smartphone-app-widget-translator",
	});
}

export default Component;
