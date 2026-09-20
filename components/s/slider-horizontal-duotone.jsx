import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gk6x-5ofb.css';
import '../../css/m/m02n1bbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gk6x-5ofb"/><path class="m02n1bbry"/></g>`,
		"fallback": "reicon:slider-horizontal-duotone",
	});
}

export default Component;
