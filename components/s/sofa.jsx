import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ux8gcdsty.css';
import '../../css/a/ahu3subdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ux8gcdsty"/><path class="ahu3subdu"/></g>`,
		"fallback": "vadivam:sofa",
	});
}

export default Component;
