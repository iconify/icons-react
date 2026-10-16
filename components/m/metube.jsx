import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uehp1-aij.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uehp1-aij"/>`,
		"fallback": "thesvg-color:metube",
	});
}

export default Component;
