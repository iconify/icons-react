import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o_gkb6b3h.css';
import '../../css/g/g9cgd7b2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o_gkb6b3h"/><path class="g9cgd7b2i"/></g>`,
		"fallback": "reicon:money-time-filled",
	});
}

export default Component;
