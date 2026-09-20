import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pjdia-bbc.css';
import '../../css/s/st2vc_bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pjdia-bbc"/><path class="st2vc_bfv"/></g>`,
		"fallback": "tabler:square-chevrons-down",
	});
}

export default Component;
