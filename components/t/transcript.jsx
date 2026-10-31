import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qtxahnbxy.css';
import '../../css/t/tr5g0tghl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qtxahnbxy"/><path class="tr5g0tghl"/></g>`,
		"fallback": "struq:transcript",
	});
}

export default Component;
