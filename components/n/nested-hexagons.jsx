import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw8evbciy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw8evbciy"/>`,
		"fallback": "game-icons:nested-hexagons",
	});
}

export default Component;
