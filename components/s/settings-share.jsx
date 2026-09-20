import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k_0x3hyiv.css';
import '../../css/a/a3za3y1rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k_0x3hyiv"/><path class="a3za3y1rh"/></g>`,
		"fallback": "tabler:settings-share",
	});
}

export default Component;
