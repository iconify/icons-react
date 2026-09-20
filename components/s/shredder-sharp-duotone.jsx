import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fm23tlb2v.css';
import '../../css/q/qo3g9rbnz.css';
import '../../css/v/vcg_lradd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fm23tlb2v"/><path clip-rule="evenodd" class="qo3g9rbnz"/><path class="vcg_lradd"/></g>`,
		"fallback": "keyline-icons:shredder-sharp-duotone",
	});
}

export default Component;
