import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m0rzy3ffb.css';
import '../../css/p/pgtjn5bxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m0rzy3ffb"/><path class="pgtjn5bxe"/></g>`,
		"fallback": "reicon:shield-alert-duotone",
	});
}

export default Component;
