import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxk0zwqnn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxk0zwqnn"/>`,
		"fallback": "selfhst:kagi-light",
	});
}

export default Component;
