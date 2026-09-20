import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msjkc3bsp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msjkc3bsp"/>`,
		"fallback": "selfhst:scratch-map-dark",
	});
}

export default Component;
