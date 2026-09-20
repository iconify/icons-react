import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t8ff4qfzt.css';
import '../../css/p/prpsb0btg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t8ff4qfzt"/><path class="prpsb0btg"/></g>`,
		"fallback": "reicon:printer5-filled",
	});
}

export default Component;
