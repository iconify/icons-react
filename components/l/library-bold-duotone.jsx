import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w9392vb8r.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/te4tu1b2p.css';
import '../../css/b/bdje-z_9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w9392vb8r"/><g class="mc2zb0bvp"><path class="te4tu1b2p"/><path class="bdje-z_9r"/></g></g>`,
		"fallback": "solar:library-bold-duotone",
	});
}

export default Component;
