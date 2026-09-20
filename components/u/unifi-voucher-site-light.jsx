import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6b239zsj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6b239zsj"/>`,
		"fallback": "selfhst:unifi-voucher-site-light",
	});
}

export default Component;
