import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm7p0_b_r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm7p0_b_r"/>`,
		"fallback": "selfhst:paperless-home",
	});
}

export default Component;
