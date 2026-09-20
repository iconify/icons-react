import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nd1jfrq2a.css';
import '../../css/o/oa5ga5b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nd1jfrq2a"/><path class="oa5ga5b4c"/></g>`,
		"fallback": "keyline-icons:loader-duotone",
	});
}

export default Component;
