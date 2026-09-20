import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h7focp4gr.css';
import '../../css/r/r8-cjywgb.css';
import '../../css/m/mpq6rb0rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h7focp4gr"/><rect class="r8-cjywgb"/><rect class="mpq6rb0rh"/></g>`,
		"fallback": "lucide:monitor-stop",
	});
}

export default Component;
