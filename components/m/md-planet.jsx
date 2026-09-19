import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w782_ibba.css';
import '../../css/d/dk77dnbeg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w782_ibba"/><path class="dk77dnbeg"/>`,
		"fallback": "ion:md-planet",
	});
}

export default Component;
