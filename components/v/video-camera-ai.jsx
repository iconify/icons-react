import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pzh2xemmy.css';
import '../../css/j/jlk5hjb9z.css';
import '../../css/r/rbrzdibek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pzh2xemmy"/><path class="jlk5hjb9z"/><path class="rbrzdibek"/></g>`,
		"fallback": "hugeicons:video-camera-ai",
	});
}

export default Component;
