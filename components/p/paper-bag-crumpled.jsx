import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1v07ne6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1v07ne6d"/>`,
		"fallback": "game-icons:paper-bag-crumpled",
	});
}

export default Component;
