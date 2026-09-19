import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey-koukvr.css';
import '../../css/n/n11wxrbsg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey-koukvr"/><path class="n11wxrbsg"/>`,
		"fallback": "ion:university",
	});
}

export default Component;
