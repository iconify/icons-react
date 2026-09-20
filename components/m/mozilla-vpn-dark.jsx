import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-dusubmx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-dusubmx"/>`,
		"fallback": "selfhst:mozilla-vpn-dark",
	});
}

export default Component;
