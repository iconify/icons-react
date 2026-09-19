import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji_aadxel.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji_aadxel"/>`,
		"fallback": "game-icons:speedometer",
	});
}

export default Component;
