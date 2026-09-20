import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spcod9vyn.css';
import '../../css/b/bxn4zdczg.css';
import '../../css/v/vfyqw7b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="spcod9vyn"/><path class="bxn4zdczg"/><path class="vfyqw7b-x"/></g>`,
		"fallback": "reicon:traffic-duotone",
	});
}

export default Component;
