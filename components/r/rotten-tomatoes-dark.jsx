import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybks5f9jf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybks5f9jf"/>`,
		"fallback": "selfhst:rotten-tomatoes-dark",
	});
}

export default Component;
