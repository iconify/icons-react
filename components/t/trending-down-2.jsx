import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hssymkb8c.css';
import '../../css/g/ghxffqbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hssymkb8c"/><path class="ghxffqbbv"/></g>`,
		"fallback": "tabler:trending-down-2",
	});
}

export default Component;
