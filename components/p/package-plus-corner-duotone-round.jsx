import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwnfvccbk.css';
import '../../css/w/wpbbzmb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bwnfvccbk"/><path class="wpbbzmb0l"/></g>`,
		"fallback": "coolicons:package-plus-corner-duotone-round",
	});
}

export default Component;
