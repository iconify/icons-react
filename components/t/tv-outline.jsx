import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o8kjugm3b.css';
import '../../css/l/la2f6ep6a.css';
import '../../css/n/njkn9wwty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o8kjugm3b"/><path class="la2f6ep6a"/><path class="njkn9wwty"/></g>`,
		"fallback": "solar:tv-outline",
	});
}

export default Component;
