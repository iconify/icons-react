import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ray_qnbjg.css';
import '../../css/v/vlvdrabkl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ray_qnbjg"/><path class="vlvdrabkl"/></g>`,
		"fallback": "oui:unlink",
	});
}

export default Component;
