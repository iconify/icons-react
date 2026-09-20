import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnabqxbry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnabqxbry"/>`,
		"fallback": "selfhst:spliit-light",
	});
}

export default Component;
