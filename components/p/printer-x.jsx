import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uowibjbpy.css';
import '../../css/y/ypbp7r2so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uowibjbpy"/><path class="ypbp7r2so"/></g>`,
		"fallback": "vadivam:printer-x",
	});
}

export default Component;
