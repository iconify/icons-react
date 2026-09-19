import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_e_t9pnf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_e_t9pnf"/>`,
		"fallback": "ion:md-pulse",
	});
}

export default Component;
