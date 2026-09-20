import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qa8tockca.css';
import '../../css/v/vkp31-b7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qa8tockca"/><path clip-rule="evenodd" class="vkp31-b7a"/></g>`,
		"fallback": "reicon:stretching2-filled",
	});
}

export default Component;
