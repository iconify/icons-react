import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_27l-bcm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_27l-bcm"/>`,
		"fallback": "game-icons:morbid-humour",
	});
}

export default Component;
