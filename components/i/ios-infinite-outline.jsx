import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcab2sbna.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcab2sbna"/>`,
		"fallback": "ion:ios-infinite-outline",
	});
}

export default Component;
