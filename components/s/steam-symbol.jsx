import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc5smubsc.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc5smubsc"/>`,
		"fallback": "fa6-brands:steam-symbol",
	});
}

export default Component;
