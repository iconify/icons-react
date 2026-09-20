import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fryxrs7cp.css';
import '../../css/i/ixoaxvb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fryxrs7cp"/><path class="ixoaxvb8j"/></g>`,
		"fallback": "majesticons:scanner",
	});
}

export default Component;
