import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tfrailbbe.css';
import '../../css/d/djfpcjb0d.css';
import '../../css/o/ou4wxlfes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tfrailbbe"/><path class="djfpcjb0d"/><path class="ou4wxlfes"/></g>`,
		"fallback": "reicon:reorder2-duotone",
	});
}

export default Component;
