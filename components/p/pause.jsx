import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q3xs48nhf.css';
import '../../css/t/ts9pjbbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="q3xs48nhf"/><rect class="ts9pjbbhb"/></g>`,
		"fallback": "lucide:pause",
	});
}

export default Component;
