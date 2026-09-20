import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k__y550tv.css';
import '../../css/r/r0o9rb3ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k__y550tv"/><path class="r0o9rb3ho"/></g>`,
		"fallback": "solar:shield-network-outline",
	});
}

export default Component;
