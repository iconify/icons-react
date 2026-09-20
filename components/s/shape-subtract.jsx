import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ayteymodc.css';
import '../../css/s/srd64cc2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ayteymodc"/><path class="srd64cc2x"/></g>`,
		"fallback": "proicons:shape-subtract",
	});
}

export default Component;
