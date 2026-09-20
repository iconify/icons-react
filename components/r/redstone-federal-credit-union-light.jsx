import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5t0um5rr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5t0um5rr"/>`,
		"fallback": "selfhst:redstone-federal-credit-union-light",
	});
}

export default Component;
