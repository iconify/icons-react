import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr-i3_k_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr-i3_k_n"/>`,
		"fallback": "selfhst:okd-light",
	});
}

export default Component;
