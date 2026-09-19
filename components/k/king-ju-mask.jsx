import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r38g2ac-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r38g2ac-z"/>`,
		"fallback": "game-icons:king-ju-mask",
	});
}

export default Component;
