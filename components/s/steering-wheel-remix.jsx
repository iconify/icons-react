import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aei_ydl8o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aei_ydl8o"/>`,
		"fallback": "streamline:steering-wheel-remix",
	});
}

export default Component;
