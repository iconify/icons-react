import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p2_64ab7f.css';
import '../../css/w/w_h6f3byf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p2_64ab7f"/><path clip-rule="evenodd" class="w_h6f3byf"/></g>`,
		"fallback": "keyline-icons:milestone-duotone",
	});
}

export default Component;
