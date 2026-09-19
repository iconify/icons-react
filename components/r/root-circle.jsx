import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h18qsbbak.css';
import '../../css/x/xa3zdn2mq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h18qsbbak"/><circle class="xa3zdn2mq"/></g>`,
		"fallback": "hugeicons:root-circle",
	});
}

export default Component;
