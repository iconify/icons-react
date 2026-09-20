import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/id-jnabug.css';
import '../../css/i/ibec4ccxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="id-jnabug"/><path class="ibec4ccxa"/></g>`,
		"fallback": "reicon:medal-square-filled",
	});
}

export default Component;
