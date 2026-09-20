import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nr5tlcjmx.css';
import '../../css/p/pyo1-abxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nr5tlcjmx"/><path class="pyo1-abxx"/></g>`,
		"fallback": "tabler:mailbox",
	});
}

export default Component;
