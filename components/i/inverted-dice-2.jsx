import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kferin2yg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kferin2yg"/>`,
		"fallback": "game-icons:inverted-dice-2",
	});
}

export default Component;
