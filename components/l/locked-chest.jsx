import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qurko8bwr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qurko8bwr"/>`,
		"fallback": "game-icons:locked-chest",
	});
}

export default Component;
