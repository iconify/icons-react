import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl117jbyi.css';
import '../../css/i/ipbgiccho.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl117jbyi"/><path class="ipbgiccho"/>`,
		"fallback": "selfhst:sharkord-dark",
	});
}

export default Component;
