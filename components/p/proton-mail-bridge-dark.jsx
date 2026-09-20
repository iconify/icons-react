import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgh7emwcy.css';
import '../../css/x/xxyq6_bip.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgh7emwcy"/><path class="xxyq6_bip"/>`,
		"fallback": "selfhst:proton-mail-bridge-dark",
	});
}

export default Component;
