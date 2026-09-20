import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_4focs_a.css';
import '../../css/l/lc3x2wb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i_4focs_a"/><path class="lc3x2wb2t"/></g>`,
		"fallback": "reicon:traffic2",
	});
}

export default Component;
