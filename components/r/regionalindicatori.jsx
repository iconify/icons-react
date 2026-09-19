import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilj6i9a_i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilj6i9a_i"/>`,
		"fallback": "fxemoji:regionalindicatori",
	});
}

export default Component;
