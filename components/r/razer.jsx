import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whrvg9bit.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whrvg9bit"/>`,
		"fallback": "selfhst:razer",
	});
}

export default Component;
