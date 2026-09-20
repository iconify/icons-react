import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v1j7s-e6d.css';
import '../../css/g/g2wvlnbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v1j7s-e6d"/><path class="g2wvlnbvv"/></g>`,
		"fallback": "solar:text-selection-bold",
	});
}

export default Component;
