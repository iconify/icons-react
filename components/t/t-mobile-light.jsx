import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9mz1tb_r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9mz1tb_r"/>`,
		"fallback": "selfhst:t-mobile-light",
	});
}

export default Component;
