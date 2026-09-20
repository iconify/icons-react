import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx2t3vb9s.css';
import '../../css/q/qr0d49tfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx2t3vb9s"/><path class="qr0d49tfb"/>`,
		"fallback": "token:mtrg",
	});
}

export default Component;
