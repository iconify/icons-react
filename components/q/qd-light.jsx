import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxz6df3mx.css';
import '../../css/d/dg0y8obci.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxz6df3mx"/><path class="dg0y8obci"/>`,
		"fallback": "selfhst:qd-light",
	});
}

export default Component;
