import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/urvrhpb5j.css';
import '../../css/w/wm6c_fxke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="urvrhpb5j"/><path class="wm6c_fxke"/></g>`,
		"fallback": "tabler:shopping-bag-cancel",
	});
}

export default Component;
