import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rgdufzqdj.css';
import '../../css/t/t8ykyt4yk.css';
import '../../css/w/wcj52rb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rgdufzqdj"/><path class="t8ykyt4yk"/><path class="wcj52rb6c"/></g>`,
		"fallback": "solar:ruler-pen-bold",
	});
}

export default Component;
