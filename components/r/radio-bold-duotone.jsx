import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8y5cubeq.css';
import '../../css/h/hp_3lhbjt.css';
import '../../css/d/dcti7r4ev.css';
import '../../css/r/ra16sl1-y.css';
import '../../css/l/luid2v2ob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z8y5cubeq"/><path class="hp_3lhbjt"/><path class="dcti7r4ev"/><path class="ra16sl1-y"/><path class="luid2v2ob"/></g>`,
		"fallback": "solar:radio-bold-duotone",
	});
}

export default Component;
