import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2k8v2boz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2k8v2boz"/>`,
		"fallback": "game-icons:magic-portal",
	});
}

export default Component;
