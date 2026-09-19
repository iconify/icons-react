import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/taofvab7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="taofvab7c"/>`,
		"fallback": "game-icons:sparkling-sabre",
	});
}

export default Component;
