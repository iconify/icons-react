import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0wi9crkl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0wi9crkl"/>`,
		"fallback": "game-icons:tarot-05-the-hierophant",
	});
}

export default Component;
