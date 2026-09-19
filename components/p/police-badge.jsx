import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq-h-bdhn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq-h-bdhn"/>`,
		"fallback": "game-icons:police-badge",
	});
}

export default Component;
