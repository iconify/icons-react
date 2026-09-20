import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-l7bsb1a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-l7bsb1a"/>`,
		"fallback": "selfhst:unifi-voucher-site-dark",
	});
}

export default Component;
