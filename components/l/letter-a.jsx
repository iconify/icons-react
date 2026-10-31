import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mv28qozpb.css';
import '../../css/x/x7etpacnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mv28qozpb"/><path class="x7etpacnh"/></g>`,
		"fallback": "vadivam:letter-a",
	});
}

export default Component;
