import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qm9f-1b5j.css';
import '../../css/m/m0pr6ebgc.css';
import '../../css/f/fhaiddqfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qm9f-1b5j"/><path class="m0pr6ebgc"/><path class="fhaiddqfm"/></g>`,
		"fallback": "reicon:ticket3",
	});
}

export default Component;
