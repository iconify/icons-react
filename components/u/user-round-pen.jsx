import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cut8-xx0g.css';
import '../../css/k/kj1m-qm_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cut8-xx0g"/><path class="kj1m-qm_z"/></g>`,
		"fallback": "vadivam:user-round-pen",
	});
}

export default Component;
