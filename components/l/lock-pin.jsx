import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/szt7b3b5e.css';
import '../../css/e/e_isedc2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="szt7b3b5e"/><path class="e_isedc2v"/></g>`,
		"fallback": "tabler:lock-pin",
	});
}

export default Component;
