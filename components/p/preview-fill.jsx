import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2ik1qbwi.css';
import '../../css/d/ddoe6f8-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2ik1qbwi"/><path class="ddoe6f8-h"/>`,
		"fallback": "mage:preview-fill",
	});
}

export default Component;
