import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psgz5bp_u.css';
import '../../css/z/z3q3owb1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psgz5bp_u"/><path class="z3q3owb1o"/>`,
		"fallback": "ion:ios-cloud-upload-outline",
	});
}

export default Component;
