import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcfqowb3p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcfqowb3p"/>`,
		"fallback": "ion:md-arrow-round-forward",
	});
}

export default Component;
