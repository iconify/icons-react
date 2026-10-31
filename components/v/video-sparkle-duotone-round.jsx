import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgsboiy5t.css';
import '../../css/f/ftonyobjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xgsboiy5t"/><path class="ftonyobjk"/></g>`,
		"fallback": "coolicons:video-sparkle-duotone-round",
	});
}

export default Component;
