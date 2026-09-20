import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/ktnoc0bvp.css';
import '../../css/g/gtm8fkbhm.css';
import '../../css/m/muh49ubmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path clip-rule="evenodd" class="ktnoc0bvp"/><path class="gtm8fkbhm"/></g><path class="muh49ubmw"/></g>`,
		"fallback": "solar:plug-circle-bold-duotone",
	});
}

export default Component;
