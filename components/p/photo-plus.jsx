import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j6y2_1bpz.css';
import '../../css/h/hn7lp_bzn.css';
import '../../css/s/slfr0rbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j6y2_1bpz"/><path class="hn7lp_bzn"/><path class="slfr0rbts"/></g>`,
		"fallback": "tabler:photo-plus",
	});
}

export default Component;
