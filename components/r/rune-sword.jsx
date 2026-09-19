import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq9pr2-7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq9pr2-7u"/>`,
		"fallback": "game-icons:rune-sword",
	});
}

export default Component;
