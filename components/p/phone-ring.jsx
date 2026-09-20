import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mtn5hjbmi.css';
import '../../css/g/g93bdwbpy.css';
import '../../css/f/f-4eznb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mtn5hjbmi"/><path class="g93bdwbpy"/><path clip-rule="evenodd" class="f-4eznb8a"/></g>`,
		"fallback": "reicon:phone-ring",
	});
}

export default Component;
