import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxydvgb4c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxydvgb4c"/>`,
		"fallback": "ion:star-half-sharp",
	});
}

export default Component;
