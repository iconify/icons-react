import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bt8eq8brk.css';
import '../../css/g/g7x9mvb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bt8eq8brk"/><path class="g7x9mvb7d"/></g>`,
		"fallback": "healthicons:running-water-24px",
	});
}

export default Component;
