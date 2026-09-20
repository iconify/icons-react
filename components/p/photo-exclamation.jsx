import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x929m5bdg.css';
import '../../css/h/hn7lp_bzn.css';
import '../../css/o/o7_4r5bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x929m5bdg"/><path class="hn7lp_bzn"/><path class="o7_4r5bjf"/></g>`,
		"fallback": "tabler:photo-exclamation",
	});
}

export default Component;
