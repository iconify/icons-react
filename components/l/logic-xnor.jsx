import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o4mqcqbdo.css';
import '../../css/h/h4igaht-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o4mqcqbdo"/><path class="h4igaht-x"/></g>`,
		"fallback": "tabler:logic-xnor",
	});
}

export default Component;
