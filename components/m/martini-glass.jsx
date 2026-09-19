import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erxx7vbwt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erxx7vbwt"/>`,
		"fallback": "fa6-solid:martini-glass",
	});
}

export default Component;
