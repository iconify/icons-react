import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i43839blh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i43839blh"/>`,
		"fallback": "game-icons:test-tube-held",
	});
}

export default Component;
