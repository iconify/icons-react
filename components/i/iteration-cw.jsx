import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/azdvjnnhi.css';
import '../../css/r/rfrj_ac_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="azdvjnnhi"/><path class="rfrj_ac_i"/></g>`,
		"fallback": "lucide:iteration-cw",
	});
}

export default Component;
