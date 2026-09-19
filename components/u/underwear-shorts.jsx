import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q75ec-jpl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q75ec-jpl"/>`,
		"fallback": "game-icons:underwear-shorts",
	});
}

export default Component;
