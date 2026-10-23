import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vy0k65knl.css';
import '../../css/g/gv_45gb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vy0k65knl"/><path class="gv_45gb6l"/></g>`,
		"fallback": "vadivam:plant-pot",
	});
}

export default Component;
