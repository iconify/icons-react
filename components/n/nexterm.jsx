import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqmurns_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqmurns_d"/>`,
		"fallback": "selfhst:nexterm",
	});
}

export default Component;
