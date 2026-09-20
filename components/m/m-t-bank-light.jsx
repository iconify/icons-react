import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vawi9eb7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vawi9eb7v"/>`,
		"fallback": "selfhst:m-t-bank-light",
	});
}

export default Component;
