import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4h6a7xri.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i4h6a7xri"/>`,
		"fallback": "fad:vroundswitch-off",
	});
}

export default Component;
