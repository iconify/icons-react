import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kpsf3pb4n.css';
import '../../css/e/elj_y3n9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kpsf3pb4n"/><path clip-rule="evenodd" class="elj_y3n9k"/></g>`,
		"fallback": "reicon:vinyl-duotone",
	});
}

export default Component;
