import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cb89wsg7d.css';
import '../../css/g/g3tbz9iqf.css';
import '../../css/y/ydll70ntu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cb89wsg7d"/><path clip-rule="evenodd" class="g3tbz9iqf"/><path clip-rule="evenodd" class="ydll70ntu"/></g>`,
		"fallback": "lets-icons:layers",
	});
}

export default Component;
