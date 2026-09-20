import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y7sqe_bvd.css';
import '../../css/h/hf-a6nbxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y7sqe_bvd"/><path class="hf-a6nbxv"/></g>`,
		"fallback": "keyline-icons:siren-two-tone",
	});
}

export default Component;
