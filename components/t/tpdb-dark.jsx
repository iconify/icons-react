import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isf22b0cc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isf22b0cc"/>`,
		"fallback": "selfhst:tpdb-dark",
	});
}

export default Component;
