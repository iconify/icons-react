import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/si64h9b3z.css';
import '../../css/d/d_7hulbhf.css';
import '../../css/a/a0_59cbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="si64h9b3z"/><path class="d_7hulbhf"/><path class="a0_59cbgc"/></g>`,
		"fallback": "iconoir:washing-machine",
	});
}

export default Component;
