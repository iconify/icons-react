import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz5y-8bcc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz5y-8bcc"/>`,
		"fallback": "game-icons:paper-windmill",
	});
}

export default Component;
