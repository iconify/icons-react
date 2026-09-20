import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m6z4csb7j.css';
import '../../css/w/wwajwib9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m6z4csb7j"/><path class="wwajwib9i"/></g>`,
		"fallback": "tabler:status-change",
	});
}

export default Component;
