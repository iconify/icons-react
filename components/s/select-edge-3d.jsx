import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rbs4k4y6n.css';
import '../../css/m/mp6yglb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rbs4k4y6n"/><path class="mp6yglb-w"/></g>`,
		"fallback": "iconoir:select-edge-3d",
	});
}

export default Component;
