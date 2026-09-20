import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv8sn4hcl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv8sn4hcl"/>`,
		"fallback": "selfhst:pi-hole-dark",
	});
}

export default Component;
