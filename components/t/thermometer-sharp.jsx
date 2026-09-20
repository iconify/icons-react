import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vk5e95kss.css';
import '../../css/q/q61zhn07g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vk5e95kss"/><path class="q61zhn07g"/></g>`,
		"fallback": "pixelarticons:thermometer-sharp",
	});
}

export default Component;
