import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oxb_gvhjw.css';
import '../../css/g/g3c_gibpm.css';
import '../../css/v/vlfia-hui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oxb_gvhjw"/><path class="g3c_gibpm"/><path class="vlfia-hui"/></g>`,
		"fallback": "streamline-freehand:modern-payment-qr-basket",
	});
}

export default Component;
