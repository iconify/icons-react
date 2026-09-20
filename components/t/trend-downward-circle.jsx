import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8fxli98z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x8fxli98z"/>`,
		"fallback": "ix:trend-downward-circle",
	});
}

export default Component;
