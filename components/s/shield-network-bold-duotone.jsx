import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6hevcvfn.css';
import '../../css/t/t3y9293jz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6hevcvfn"/><path clip-rule="evenodd" class="t3y9293jz"/>`,
		"fallback": "solar:shield-network-bold-duotone",
	});
}

export default Component;
