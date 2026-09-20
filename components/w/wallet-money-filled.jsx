import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/evq1l3bzp.css';
import '../../css/c/cgrn-n44o.css';
import '../../css/l/l_8bueb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="evq1l3bzp"/><path clip-rule="evenodd" class="cgrn-n44o"/><path class="l_8bueb4b"/></g>`,
		"fallback": "reicon:wallet-money-filled",
	});
}

export default Component;
