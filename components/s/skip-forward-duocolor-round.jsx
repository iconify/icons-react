import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uax7j3gsp.css';
import '../../css/x/x0mx6shao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uax7j3gsp"/><path class="x0mx6shao"/></g>`,
		"fallback": "coolicons:skip-forward-duocolor-round",
	});
}

export default Component;
