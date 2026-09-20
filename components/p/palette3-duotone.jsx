import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iy4qule-o.css';
import '../../css/d/dvisw9zgk.css';
import '../../css/q/qthixtbrg.css';
import '../../css/u/uysb_grfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iy4qule-o"/><path class="dvisw9zgk"/><path class="qthixtbrg"/><path class="uysb_grfy"/></g>`,
		"fallback": "reicon:palette3-duotone",
	});
}

export default Component;
