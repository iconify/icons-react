import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvnsribyb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvnsribyb"/>`,
		"fallback": "game-icons:tarot-17-the-star",
	});
}

export default Component;
