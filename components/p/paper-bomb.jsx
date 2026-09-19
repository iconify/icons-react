import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axrzqh94a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axrzqh94a"/>`,
		"fallback": "game-icons:paper-bomb",
	});
}

export default Component;
