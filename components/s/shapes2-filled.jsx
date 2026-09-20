import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u04c-u08l.css';
import '../../css/a/aaxw-5jpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u04c-u08l"/><path class="aaxw-5jpg"/></g>`,
		"fallback": "reicon:shapes2-filled",
	});
}

export default Component;
