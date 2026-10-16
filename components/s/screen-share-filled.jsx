import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wahm6_66i.css';
import '../../css/b/bp51unbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wahm6_66i"/><rect transform="matrix(0 -1 -1 0 22.14 19.03)" class="bp51unbmb"/></g>`,
		"fallback": "andrsrxn:screen-share-filled",
	});
}

export default Component;
