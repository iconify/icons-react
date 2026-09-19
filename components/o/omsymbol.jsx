import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuoip9b-q.css';
import '../../css/i/i2wte8b4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuoip9b-q"/><path class="i2wte8b4i"/>`,
		"fallback": "fxemoji:omsymbol",
	});
}

export default Component;
