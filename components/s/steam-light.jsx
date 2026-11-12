import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euhhj_9fy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euhhj_9fy"/>`,
		"fallback": "selfhst:steam-light",
	});
}

export default Component;
