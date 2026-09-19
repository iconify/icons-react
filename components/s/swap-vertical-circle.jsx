import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2djj2bco.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2djj2bco"/>`,
		"fallback": "zmdi:swap-vertical-circle",
	});
}

export default Component;
