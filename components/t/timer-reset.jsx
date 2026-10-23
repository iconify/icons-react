import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oj64usbpy.css';
import '../../css/k/k5b12z82e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oj64usbpy"/><path class="k5b12z82e"/></g>`,
		"fallback": "vadivam:timer-reset",
	});
}

export default Component;
