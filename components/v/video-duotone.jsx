import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cqmknwfil.css';
import '../../css/e/ec7w0ebcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cqmknwfil"/><path clip-rule="evenodd" class="ec7w0ebcn"/></g>`,
		"fallback": "keyline-icons:video-duotone",
	});
}

export default Component;
