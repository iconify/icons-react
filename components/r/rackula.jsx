import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlgv7ybbq.css';
import '../../css/b/bpn70zs4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlgv7ybbq"/><path class="bpn70zs4k"/>`,
		"fallback": "selfhst:rackula",
	});
}

export default Component;
