import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vtn6j--wx.css';
import '../../css/w/w3ie_cv-x.css';
import '../../css/d/d33ytxwqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vtn6j--wx"/><path class="w3ie_cv-x"/><path class="d33ytxwqr"/></g>`,
		"fallback": "tabler:photo-circle-plus",
	});
}

export default Component;
