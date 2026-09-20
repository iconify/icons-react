import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jdgkazrng.css';
import '../../css/w/wcgo3vafu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jdgkazrng"/><path class="wcgo3vafu"/></g>`,
		"fallback": "reicon:playlist3-filled",
	});
}

export default Component;
