import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5j3p6b5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5j3p6b5g"/>`,
		"fallback": "game-icons:thermometer-hot",
	});
}

export default Component;
