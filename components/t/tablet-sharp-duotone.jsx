import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/setbkfbbg.css';
import '../../css/s/shnylacfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="setbkfbbg"/><path class="shnylacfb"/></g>`,
		"fallback": "keyline-icons:tablet-sharp-duotone",
	});
}

export default Component;
