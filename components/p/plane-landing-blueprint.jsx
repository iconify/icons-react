import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/us9cs6bil.css';
import '../../css/w/w0e70wbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="us9cs6bil wm-k"/><path class="w0e70wbbt wm-a"/></g>`,
		"fallback": "withicons:plane-landing-blueprint",
	});
}

export default Component;
