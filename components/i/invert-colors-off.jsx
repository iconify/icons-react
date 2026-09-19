import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtynt79qx.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtynt79qx"/>`,
		"fallback": "zmdi:invert-colors-off",
	});
}

export default Component;
