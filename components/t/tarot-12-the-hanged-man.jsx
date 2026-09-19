import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdguj2hdh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdguj2hdh"/>`,
		"fallback": "game-icons:tarot-12-the-hanged-man",
	});
}

export default Component;
