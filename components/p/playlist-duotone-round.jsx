import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9b__3b_p.css';
import '../../css/a/a6ft3rbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9b__3b_p"/><path class="a6ft3rbot"/></g>`,
		"fallback": "coolicons:playlist-duotone-round",
	});
}

export default Component;
