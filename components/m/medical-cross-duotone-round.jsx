import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u3ou2gbot.css';
import '../../css/o/oqbs3c23v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u3ou2gbot"/><path class="oqbs3c23v"/></g>`,
		"fallback": "coolicons:medical-cross-duotone-round",
	});
}

export default Component;
