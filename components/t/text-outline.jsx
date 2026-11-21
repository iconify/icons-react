import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0szqpn1j.css';
import '../../css/a/a_u_vcn1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0szqpn1j"/><path class="a_u_vcn1o"/>`,
		"fallback": "ion:text-outline",
	});
}

export default Component;
