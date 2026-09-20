import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k1c0facqm.css';
import '../../css/s/st2vc_bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k1c0facqm"/><path class="st2vc_bfv"/></g>`,
		"fallback": "tabler:square-arrow-up",
	});
}

export default Component;
