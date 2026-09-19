import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6ba4gbao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6ba4gbao"/>`,
		"fallback": "game-icons:perspective-dice-six-faces-four",
	});
}

export default Component;
