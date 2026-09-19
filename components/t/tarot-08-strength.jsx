import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq62yebju.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq62yebju"/>`,
		"fallback": "game-icons:tarot-08-strength",
	});
}

export default Component;
