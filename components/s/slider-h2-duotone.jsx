import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rw6syebsy.css';
import '../../css/d/dzb1brs1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rw6syebsy"/><path class="dzb1brs1c"/></g>`,
		"fallback": "reicon:slider-h2-duotone",
	});
}

export default Component;
