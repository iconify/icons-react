import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd_clobel.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd_clobel"/>`,
		"fallback": "selfhst:monica-light",
	});
}

export default Component;
