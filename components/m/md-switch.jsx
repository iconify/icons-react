import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq0gx_bgt.css';
import '../../css/w/w6a568a7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq0gx_bgt"/><path class="w6a568a7m"/>`,
		"fallback": "ion:md-switch",
	});
}

export default Component;
