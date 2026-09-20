import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yr7m05v4v.css';
import '../../css/y/yrh_v73eb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yr7m05v4v"/><path clip-rule="evenodd" class="yrh_v73eb"/></g>`,
		"fallback": "streamline-sharp-color:ruler-flat",
	});
}

export default Component;
