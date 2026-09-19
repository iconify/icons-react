import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqnfig0ya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqnfig0ya"/>`,
		"fallback": "game-icons:kitchen-scale",
	});
}

export default Component;
