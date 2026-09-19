import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxma8lbox.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxma8lbox"/>`,
		"fallback": "dinkie-icons:six-of-characters-mahjong",
	});
}

export default Component;
