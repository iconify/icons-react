import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhum8un3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jhum8un3s"/>`,
		"fallback": "streamline-freehand:saving-bull-market",
	});
}

export default Component;
