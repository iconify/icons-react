import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nayue9sxw.css';
import '../../css/v/vpnv4ccxw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nayue9sxw"/><path class="vpnv4ccxw"/>`,
		"fallback": "ion:ios-ionic-outline",
	});
}

export default Component;
