import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iistc1ber.css';
import '../../css/p/pl-clrbxd.css';
import '../../css/i/i4y0aubop.css';
import '../../css/w/wb1puackx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iistc1ber"/><path class="pl-clrbxd"/><path class="i4y0aubop"/><path class="wb1puackx"/>`,
		"fallback": "token:usdd",
	});
}

export default Component;
