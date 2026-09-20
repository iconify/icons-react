import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/ws-x7156w.css';
import '../../css/o/ox_z3wb3f.css';
import '../../css/r/r2w7r7b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ws-x7156w"/><path class="ox_z3wb3f"/><path class="r2w7r7b1e"/></g>`,
		"fallback": "streamline-ultimate:power-outlet-type-b",
	});
}

export default Component;
