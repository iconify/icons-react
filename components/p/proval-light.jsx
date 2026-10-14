import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oicl4q_ek.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oicl4q_ek"/>`,
		"fallback": "selfhst:proval-light",
	});
}

export default Component;
