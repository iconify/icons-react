import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r53pz2bft.css';
import '../../css/o/om_x3xvee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r53pz2bft"/><path class="om_x3xvee"/></g>`,
		"fallback": "solar:test-tube-minimalistic-bold",
	});
}

export default Component;
