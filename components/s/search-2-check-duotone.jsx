import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zu7ckv_si.css';
import '../../css/y/y7guzsryq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zu7ckv_si"/><path class="y7guzsryq"/></g>`,
		"fallback": "keyline-icons:search-2-check-duotone",
	});
}

export default Component;
