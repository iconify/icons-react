import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_k0u_bip.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_k0u_bip"/>`,
		"fallback": "pinhead:sandbox-with-sand-trowel",
	});
}

export default Component;
