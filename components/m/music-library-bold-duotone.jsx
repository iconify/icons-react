import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1j6tx76b.css';
import '../../css/p/pym8deq-f.css';
import '../../css/u/uz194sblu.css';
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
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n1j6tx76b"/><path class="pym8deq-f"/><path class="uz194sblu"/><g class="mc2zb0bvp"><path class="te4tu1b2p"/><path class="bdje-z_9r"/></g></g>`,
		"fallback": "solar:music-library-bold-duotone",
	});
}

export default Component;
