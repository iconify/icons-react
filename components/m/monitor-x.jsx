import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n_s25ur5w.css';
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
		"content": `<g class="nrj6p8qat"><path class="n_s25ur5w"/><rect class="r8-cjywgb"/><path class="h7focp4gr"/></g>`,
		"fallback": "lucide:monitor-x",
	});
}

export default Component;
