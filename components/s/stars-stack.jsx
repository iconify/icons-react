import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afj6p5bbq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afj6p5bbq"/>`,
		"fallback": "game-icons:stars-stack",
	});
}

export default Component;
