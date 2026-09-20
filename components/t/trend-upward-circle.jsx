import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnb03vb7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wnb03vb7m"/>`,
		"fallback": "ix:trend-upward-circle",
	});
}

export default Component;
