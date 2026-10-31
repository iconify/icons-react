import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dpolj7ivh.css';
import '../../css/c/cshijd3wh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dpolj7ivh"/><path class="cshijd3wh"/></g>`,
		"fallback": "coolicons:slider-2-duotone-round",
	});
}

export default Component;
