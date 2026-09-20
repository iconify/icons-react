import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x_4i1x07g.css';
import '../../css/z/z0aeb7bio.css';
import '../../css/e/e3livhuwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x_4i1x07g"/><path class="z0aeb7bio"/><path class="e3livhuwh"/></g>`,
		"fallback": "mage:user-question-mark",
	});
}

export default Component;
