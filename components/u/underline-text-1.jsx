import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voz8zc88m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voz8zc88m"/>`,
		"fallback": "streamline:underline-text-1",
	});
}

export default Component;
