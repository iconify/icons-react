import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bo9s6z0nt.css';
import '../../css/c/c34-z67ei.css';
import '../../css/l/lk6osub0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bo9s6z0nt"/><path class="c34-z67ei"/><path class="lk6osub0l"/></g>`,
		"fallback": "solar:music-note-3-bold-duotone",
	});
}

export default Component;
