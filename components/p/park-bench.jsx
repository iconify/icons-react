import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7ozbv1eu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7ozbv1eu"/>`,
		"fallback": "game-icons:park-bench",
	});
}

export default Component;
