import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9f86gbzg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9f86gbzg"/>`,
		"fallback": "game-icons:pc",
	});
}

export default Component;
