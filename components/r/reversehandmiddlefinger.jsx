import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkdcq5bux.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkdcq5bux"/>`,
		"fallback": "fxemoji:reversehandmiddlefinger",
	});
}

export default Component;
