import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okm5t4bxo.css';
import '../../css/k/kv90-5mju.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okm5t4bxo"/><path class="kv90-5mju"/>`,
		"fallback": "selfhst:unifi-voucher-site",
	});
}

export default Component;
