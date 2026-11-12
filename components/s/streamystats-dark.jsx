import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyop2kbkj.css';
import '../../css/s/sna9uxb8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyop2kbkj"/><path class="sna9uxb8p"/>`,
		"fallback": "selfhst:streamystats-dark",
	});
}

export default Component;
