import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x_24xr3ii.css';
import '../../css/r/rw674hbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x_24xr3ii"/><path class="rw674hbep"/></g>`,
		"fallback": "iconoir:maps-turn-right",
	});
}

export default Component;
