import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntr_u1-hk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntr_u1-hk"/>`,
		"fallback": "ion:logo-tux",
	});
}

export default Component;
