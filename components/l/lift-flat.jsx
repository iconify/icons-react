import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygre25b_k.css';
import '../../css/w/w6_cphcth.css';
import '../../css/h/hrs0vob_f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ygre25b_k"/><path clip-rule="evenodd" class="w6_cphcth"/><path class="hrs0vob_f"/></g>`,
		"fallback": "streamline-plump-color:lift-flat",
	});
}

export default Component;
