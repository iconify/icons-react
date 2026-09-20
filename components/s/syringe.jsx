import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/p/pmr8bmynq.css';
import '../../css/e/e_679sgrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="pmr8bmynq"/><path class="e_679sgrf"/></g>`,
		"fallback": "streamline-sharp-color:syringe",
	});
}

export default Component;
