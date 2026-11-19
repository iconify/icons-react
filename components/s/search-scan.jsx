import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r84gc2bvk.css';
import '../../css/u/u87kenbhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r84gc2bvk"/><path clip-rule="evenodd" class="u87kenbhz"/></g>`,
		"fallback": "andrsrxn:search-scan",
	});
}

export default Component;
