import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jq8i14b1j.css';
import '../../css/j/jdhx-vl_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jq8i14b1j"/><path class="jdhx-vl_q"/></g>`,
		"fallback": "keyline-icons:store-duotone",
	});
}

export default Component;
