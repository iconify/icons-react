import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3mm8r2qu.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3mm8r2qu"/>`,
		"fallback": "fa-solid:ruler-vertical",
	});
}

export default Component;
