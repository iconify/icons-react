import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nz1wz29-n.css';
import '../../css/u/uwpdhwbvk.css';
import '../../css/w/wh2bzxdhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nz1wz29-n"/><path class="uwpdhwbvk"/><circle class="wh2bzxdhv"/></g>`,
		"fallback": "lucide:trailer",
	});
}

export default Component;
