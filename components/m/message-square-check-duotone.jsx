import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c2k-m-3ae.css';
import '../../css/k/k_qsmjzvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c2k-m-3ae"/><path class="k_qsmjzvx"/></g>`,
		"fallback": "keyline-icons:message-square-check-duotone",
	});
}

export default Component;
