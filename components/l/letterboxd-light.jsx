import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np_e4lx1v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np_e4lx1v"/>`,
		"fallback": "selfhst:letterboxd-light",
	});
}

export default Component;
