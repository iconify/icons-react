import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zciper0bh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zciper0bh"/>`,
		"fallback": "game-icons:skeleton-inside",
	});
}

export default Component;
