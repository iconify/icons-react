import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuds1jrnr.css';
import '../../css/a/a_u_vcn1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuds1jrnr"/><path class="a_u_vcn1o"/>`,
		"fallback": "famicons:text-outline",
	});
}

export default Component;
