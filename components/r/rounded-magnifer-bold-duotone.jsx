import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcpnkmxdp.css';
import '../../css/t/t4z7qo_ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcpnkmxdp"/><path clip-rule="evenodd" class="t4z7qo_ir"/>`,
		"fallback": "solar:rounded-magnifer-bold-duotone",
	});
}

export default Component;
