import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dmu_g_-6x.css';
import '../../css/s/sy10l8b6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dmu_g_-6x"/><path class="sy10l8b6k"/></g>`,
		"fallback": "tabler:shopping-bag-heart",
	});
}

export default Component;
