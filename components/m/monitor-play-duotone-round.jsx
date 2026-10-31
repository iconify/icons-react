import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/es5_wnb8r.css';
import '../../css/o/oqz5obcfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="es5_wnb8r"/><path class="oqz5obcfg"/></g>`,
		"fallback": "coolicons:monitor-play-duotone-round",
	});
}

export default Component;
