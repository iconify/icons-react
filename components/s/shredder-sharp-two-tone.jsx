import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fm23tlb2v.css';
import '../../css/f/ffurv5fif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fm23tlb2v"/><path class="ffurv5fif"/></g>`,
		"fallback": "keyline-icons:shredder-sharp-two-tone",
	});
}

export default Component;
