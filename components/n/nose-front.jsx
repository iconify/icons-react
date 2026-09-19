import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvtifwbgw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvtifwbgw"/>`,
		"fallback": "game-icons:nose-front",
	});
}

export default Component;
