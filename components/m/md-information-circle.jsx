import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d635mcbhn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d635mcbhn"/>`,
		"fallback": "ion:md-information-circle",
	});
}

export default Component;
