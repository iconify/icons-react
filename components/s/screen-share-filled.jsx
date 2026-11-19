import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2c986bkm.css';
import '../../css/u/utwtglbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u2c986bkm"/><path class="utwtglbke"/></g>`,
		"fallback": "andrsrxn:screen-share-filled",
	});
}

export default Component;
