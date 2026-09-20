import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ee9txibtn.css';
import '../../css/h/htxsnohth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ee9txibtn"/><path class="htxsnohth"/></g>`,
		"fallback": "tabler:microphone",
	});
}

export default Component;
