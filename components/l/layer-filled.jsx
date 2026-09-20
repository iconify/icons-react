import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vvodcjc8y.css';
import '../../css/d/dm99q5byf.css';
import '../../css/u/ugktm2bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vvodcjc8y"/><path class="dm99q5byf"/><path class="ugktm2bbz"/></g>`,
		"fallback": "reicon:layer-filled",
	});
}

export default Component;
