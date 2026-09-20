import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rbpupwbvo.css';
import '../../css/t/t8zrjbctr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="rbpupwbvo"/><path class="t8zrjbctr"/></g>`,
		"fallback": "meteor-icons:tree",
	});
}

export default Component;
