import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oqp-zlo1c.css';
import '../../css/e/eslg_bc-y.css';
import '../../css/v/vxr-ddbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oqp-zlo1c"/><path class="eslg_bc-y"/><path class="vxr-ddbnw"/></g>`,
		"fallback": "lucide:refresh-cw",
	});
}

export default Component;
