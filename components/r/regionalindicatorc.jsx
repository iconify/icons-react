import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec43qpnlr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec43qpnlr"/>`,
		"fallback": "fxemoji:regionalindicatorc",
	});
}

export default Component;
