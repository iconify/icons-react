import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_spqu3na.css';
import '../../css/y/y5xx1ubma.css';
import '../../css/m/mjv9actef.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_spqu3na"/><path class="y5xx1ubma"/><path class="mjv9actef"/>`,
		"fallback": "ion:navicon-round",
	});
}

export default Component;
