import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/td1-22b0d.css';
import '../../css/l/la2i_0usa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="td1-22b0d"/><path class="la2i_0usa"/></g>`,
		"fallback": "vadivam:projector",
	});
}

export default Component;
