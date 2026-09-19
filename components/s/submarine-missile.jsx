import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qacw4q04o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qacw4q04o"/>`,
		"fallback": "game-icons:submarine-missile",
	});
}

export default Component;
