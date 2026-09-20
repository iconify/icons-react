import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p7nlkppgw.css';
import '../../css/b/b7k1tkb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p7nlkppgw"/><path clip-rule="evenodd" class="b7k1tkb3y"/></g>`,
		"fallback": "reicon:rugby-filled",
	});
}

export default Component;
