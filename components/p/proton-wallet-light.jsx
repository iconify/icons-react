import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dne8y0bds.css';
import '../../css/b/b1ivybqei.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dne8y0bds"/><path class="b1ivybqei"/>`,
		"fallback": "selfhst:proton-wallet-light",
	});
}

export default Component;
