import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n697wktcf.css';

const viewBox = {"width":1408,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n697wktcf"/>`,
		"fallback": "vs:user-suit",
	});
}

export default Component;
