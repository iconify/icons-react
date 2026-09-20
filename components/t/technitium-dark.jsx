import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_t-fpb_i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_t-fpb_i"/>`,
		"fallback": "selfhst:technitium-dark",
	});
}

export default Component;
