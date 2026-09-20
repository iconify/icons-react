import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i9hbfacrb.css';
import '../../css/s/ss0-xmbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i9hbfacrb"/><path class="ss0-xmbxt"/></g>`,
		"fallback": "reicon:tower-filled",
	});
}

export default Component;
