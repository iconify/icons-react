import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjom0ukgu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjom0ukgu"/>`,
		"fallback": "game-icons:sun-priest",
	});
}

export default Component;
