import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ea4hx2bih.css';
import '../../css/h/hn7lp_bzn.css';
import '../../css/q/qf20nh9zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ea4hx2bih"/><path class="hn7lp_bzn"/><path class="qf20nh9zn"/></g>`,
		"fallback": "tabler:photo-check",
	});
}

export default Component;
