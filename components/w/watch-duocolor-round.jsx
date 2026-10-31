import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mwg9_qb3b.css';
import '../../css/k/k6mfu6bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mwg9_qb3b"/><path class="k6mfu6bqi"/></g>`,
		"fallback": "coolicons:watch-duocolor-round",
	});
}

export default Component;
