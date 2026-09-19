import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwxql1y0c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwxql1y0c"/>`,
		"fallback": "game-icons:meditation",
	});
}

export default Component;
