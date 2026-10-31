import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgluqxsnp.css';
import '../../css/i/ifj1jkb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bgluqxsnp"/><path class="ifj1jkb8e"/></g>`,
		"fallback": "coolicons:note-duotone-round",
	});
}

export default Component;
