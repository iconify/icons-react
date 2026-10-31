import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pjc7nwbke.css';
import '../../css/l/le3mv3bds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pjc7nwbke"/><path class="le3mv3bds"/></g>`,
		"fallback": "coolicons:running-duocolor-round",
	});
}

export default Component;
