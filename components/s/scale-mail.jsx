import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb2jjoqwg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb2jjoqwg"/>`,
		"fallback": "game-icons:scale-mail",
	});
}

export default Component;
