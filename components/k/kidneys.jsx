import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztyz0qbqp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztyz0qbqp"/>`,
		"fallback": "game-icons:kidneys",
	});
}

export default Component;
