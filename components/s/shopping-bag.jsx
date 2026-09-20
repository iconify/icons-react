import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bz4u5iy6w.css';
import '../../css/k/k0i0ytbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bz4u5iy6w"/><path class="k0i0ytbox"/></g>`,
		"fallback": "tabler:shopping-bag",
	});
}

export default Component;
