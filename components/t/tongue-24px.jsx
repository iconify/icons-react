import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/guxl7542t.css';
import '../../css/v/v23rm7oqz.css';
import '../../css/c/ce7pxobfo.css';
import '../../css/i/id14f9b0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="guxl7542t"/><path class="v23rm7oqz"/><path class="ce7pxobfo"/><path clip-rule="evenodd" class="id14f9b0f"/></g>`,
		"fallback": "healthicons:tongue-24px",
	});
}

export default Component;
