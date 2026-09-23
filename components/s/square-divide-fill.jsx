import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i5lvicvhn.css';
import '../../css/d/dygl0op_e.css';
import '../../css/s/sd8cfcjbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i5lvicvhn"/><path class="dygl0op_e"/><path class="sd8cfcjbo"/></g>`,
		"fallback": "keyline-icons:square-divide-fill",
	});
}

export default Component;
