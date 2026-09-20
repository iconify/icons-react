import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n_hes3sdi.css';
import '../../css/f/f2y748k3o.css';
import '../../css/n/nq-mj83lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n_hes3sdi"/><path class="f2y748k3o"/><path class="nq-mj83lp"/></g>`,
		"fallback": "tabler:photo-bitcoin",
	});
}

export default Component;
