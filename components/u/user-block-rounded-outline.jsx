import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kym78-byh.css';
import '../../css/s/smtnf3btv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kym78-byh"/><path class="smtnf3btv"/></g>`,
		"fallback": "solar:user-block-rounded-outline",
	});
}

export default Component;
