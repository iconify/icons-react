import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ag-kl42uh.css';
import '../../css/k/kyszcdcee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ag-kl42uh"/><path class="kyszcdcee"/></g>`,
		"fallback": "hugeicons:touch-locked-01",
	});
}

export default Component;
