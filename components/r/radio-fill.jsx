import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zyu0detlv.css';
import '../../css/t/twq-64bog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="zyu0detlv"/><path class="twq-64bog"/></g>`,
		"fallback": "keyline-icons:radio-fill",
	});
}

export default Component;
