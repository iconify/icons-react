import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/te1o1iy7a.css';
import '../../css/f/fewy_veac.css';
import '../../css/g/g9ct16bty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="te1o1iy7a"/><path clip-rule="evenodd" class="fewy_veac"/><path class="g9ct16bty"/></g>`,
		"fallback": "reicon:sort-alpha-duotone",
	});
}

export default Component;
