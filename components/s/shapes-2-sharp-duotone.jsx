import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/evbrmn5ti.css';
import '../../css/i/is2j-tboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="evbrmn5ti"/><path class="is2j-tboh"/></g>`,
		"fallback": "keyline-icons:shapes-2-sharp-duotone",
	});
}

export default Component;
