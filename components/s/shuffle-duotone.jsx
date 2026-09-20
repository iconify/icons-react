import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spcod9vyn.css';
import '../../css/i/ipfb2mbvd.css';
import '../../css/m/m2ba3rb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="spcod9vyn"/><path class="ipfb2mbvd"/><path class="m2ba3rb9l"/></g>`,
		"fallback": "reicon:shuffle-duotone",
	});
}

export default Component;
