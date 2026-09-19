import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ice-5lmvf.css';
import '../../css/o/oafign_da.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ice-5lmvf"/><path class="oafign_da"/>`,
		"fallback": "ion:pizza",
	});
}

export default Component;
