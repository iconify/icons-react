import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/az1hpy9gr.css';
import '../../css/o/o2dceybsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="az1hpy9gr"/><circle class="o2dceybsa"/></g>`,
		"fallback": "lucide:line-dot-top-vertical",
	});
}

export default Component;
