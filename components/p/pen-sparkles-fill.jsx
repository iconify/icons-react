import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zgwutpbmz.css';
import '../../css/w/wt-af070s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zgwutpbmz"/><path class="wt-af070s"/></g>`,
		"fallback": "keyline-icons:pen-sparkles-fill",
	});
}

export default Component;
