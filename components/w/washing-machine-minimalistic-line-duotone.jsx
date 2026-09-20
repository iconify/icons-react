import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jjq2qh_fp.css';
import '../../css/b/b-w7m1bnc.css';
import '../../css/p/p-t_3wb-z.css';
import '../../css/f/f00_0pbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jjq2qh_fp"/><path class="b-w7m1bnc"/><path class="p-t_3wb-z"/><path class="f00_0pbwr"/></g>`,
		"fallback": "solar:washing-machine-minimalistic-line-duotone",
	});
}

export default Component;
