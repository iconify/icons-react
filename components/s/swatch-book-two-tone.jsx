import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gb_5tcb-k.css';
import '../../css/x/xb2p7rnuf.css';
import '../../css/e/em8goyshd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gb_5tcb-k"/><path class="xb2p7rnuf"/><path class="em8goyshd"/></g>`,
		"fallback": "keyline-icons:swatch-book-two-tone",
	});
}

export default Component;
