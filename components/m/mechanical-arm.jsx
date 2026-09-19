import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imj3tbb9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imj3tbb9i"/>`,
		"fallback": "game-icons:mechanical-arm",
	});
}

export default Component;
