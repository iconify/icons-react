import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3gfd-2ey.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3gfd-2ey"/>`,
		"fallback": "game-icons:sri-lanka",
	});
}

export default Component;
