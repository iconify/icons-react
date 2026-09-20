import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zor11obzi.css';
import '../../css/r/r8-cjywgb.css';
import '../../css/h/h7focp4gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zor11obzi"/><rect class="r8-cjywgb"/><path class="h7focp4gr"/></g>`,
		"fallback": "lucide:monitor-check",
	});
}

export default Component;
