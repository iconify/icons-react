import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhiuo3b4y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhiuo3b4y"/>`,
		"fallback": "game-icons:vhs",
	});
}

export default Component;
