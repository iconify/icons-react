import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/macoowb4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="macoowb4v"/>`,
		"fallback": "game-icons:perspective-dice-six-faces-six",
	});
}

export default Component;
