import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siidedcrr.css';
import '../../css/v/vcg1j4bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="siidedcrr"/><path class="vcg1j4bpj"/>`,
		"fallback": "solar:playlist-minimalistic-3-bold",
	});
}

export default Component;
