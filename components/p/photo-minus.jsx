import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bezk08bnz.css';
import '../../css/h/hn7lp_bzn.css';
import '../../css/t/tu-453b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bezk08bnz"/><path class="hn7lp_bzn"/><path class="tu-453b3v"/></g>`,
		"fallback": "tabler:photo-minus",
	});
}

export default Component;
