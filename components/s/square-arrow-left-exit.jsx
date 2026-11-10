import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qaykyo7wf.css';
import '../../css/y/ymu6rxbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qaykyo7wf"/><path class="ymu6rxbdp"/></g>`,
		"fallback": "lucide:square-arrow-left-exit",
	});
}

export default Component;
