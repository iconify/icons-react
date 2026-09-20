import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i3e-v7bvr.css';
import '../../css/i/ienut5b7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i3e-v7bvr"/><path class="ienut5b7e"/></g>`,
		"fallback": "tabler:photo-share",
	});
}

export default Component;
