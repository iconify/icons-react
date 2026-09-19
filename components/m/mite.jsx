import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlmq5wygn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlmq5wygn"/>`,
		"fallback": "game-icons:mite",
	});
}

export default Component;
