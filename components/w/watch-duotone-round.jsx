import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/daf2jp9-x.css';
import '../../css/y/ylp_68nle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="daf2jp9-x"/><path class="ylp_68nle"/></g>`,
		"fallback": "coolicons:watch-duotone-round",
	});
}

export default Component;
