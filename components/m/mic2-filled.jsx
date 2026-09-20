import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d7sxx025v.css';
import '../../css/g/gtmxuwkrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d7sxx025v"/><path clip-rule="evenodd" class="gtmxuwkrn"/></g>`,
		"fallback": "reicon:mic2-filled",
	});
}

export default Component;
