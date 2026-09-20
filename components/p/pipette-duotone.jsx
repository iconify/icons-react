import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spvf66xfy.css';
import '../../css/a/ap6ktuy1p.css';
import '../../css/x/x43rtcqfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="spvf66xfy"/><path class="ap6ktuy1p"/><path class="x43rtcqfw"/></g>`,
		"fallback": "reicon:pipette-duotone",
	});
}

export default Component;
