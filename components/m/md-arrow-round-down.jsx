import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmsij2f1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmsij2f1j"/>`,
		"fallback": "ion:md-arrow-round-down",
	});
}

export default Component;
