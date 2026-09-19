import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hwsal5q-o.css';
import '../../css/c/crnr6-62j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="hwsal5q-o"/><path class="crnr6-62j"/></g>`,
		"fallback": "akar-icons:planet",
	});
}

export default Component;
