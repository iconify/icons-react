import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kag80rb4s.css';
import '../../css/h/hex-lic2x.css';
import '../../css/d/dmc_suboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kag80rb4s"/><path class="hex-lic2x"/><path class="dmc_suboo"/></g>`,
		"fallback": "tabler:slideshow",
	});
}

export default Component;
