import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hw_dngr3f.css';
import '../../css/w/w00z3jbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hw_dngr3f"/><path class="w00z3jbhb"/></g>`,
		"fallback": "coolicons:link-duocolor-round",
	});
}

export default Component;
