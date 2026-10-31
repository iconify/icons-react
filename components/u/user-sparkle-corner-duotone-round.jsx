import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nsxmd8b4m.css';
import '../../css/p/p7ar5hbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nsxmd8b4m"/><path class="p7ar5hbnl"/></g>`,
		"fallback": "coolicons:user-sparkle-corner-duotone-round",
	});
}

export default Component;
