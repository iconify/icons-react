import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niuq_4bhl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niuq_4bhl"/>`,
		"fallback": "selfhst:litellm-light",
	});
}

export default Component;
