import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klsy0h-si.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klsy0h-si"/>`,
		"fallback": "game-icons:party-flags",
	});
}

export default Component;
