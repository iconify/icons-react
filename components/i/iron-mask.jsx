import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usbbq0hbi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usbbq0hbi"/>`,
		"fallback": "game-icons:iron-mask",
	});
}

export default Component;
