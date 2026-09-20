import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jfxeu4k6o.css';
import '../../css/r/r-mh2o-5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jfxeu4k6o"/><path class="r-mh2o-5h"/></g>`,
		"fallback": "reicon:phone-duotone",
	});
}

export default Component;
