import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9s5racgk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9s5racgk"/>`,
		"fallback": "ion:md-hammer",
	});
}

export default Component;
