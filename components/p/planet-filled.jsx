import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cpu-lob0s.css';
import '../../css/b/bp8ek_gzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cpu-lob0s"/><path class="bp8ek_gzl"/></g>`,
		"fallback": "reicon:planet-filled",
	});
}

export default Component;
