import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnu6c421i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnu6c421i"/>`,
		"fallback": "ion:md-contact",
	});
}

export default Component;
