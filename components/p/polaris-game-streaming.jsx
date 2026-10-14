import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz881ov0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz881ov0r"/>`,
		"fallback": "selfhst:polaris-game-streaming",
	});
}

export default Component;
