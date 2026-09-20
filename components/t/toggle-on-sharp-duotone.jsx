import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j281rgc-y.css';
import '../../css/w/w80ejxjvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j281rgc-y"/><path clip-rule="evenodd" class="w80ejxjvd"/></g>`,
		"fallback": "keyline-icons:toggle-on-sharp-duotone",
	});
}

export default Component;
