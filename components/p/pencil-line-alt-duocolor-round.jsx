import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hvuoh6b3h.css';
import '../../css/k/k31snqb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hvuoh6b3h"/><path class="k31snqb_g"/></g>`,
		"fallback": "coolicons:pencil-line-alt-duocolor-round",
	});
}

export default Component;
