import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nrlirxy2k.css';
import '../../css/c/cwfio2b2w.css';
import '../../css/g/gcatcbilq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nrlirxy2k wm-deco"/><path class="cwfio2b2w wm-deco"/><path class="gcatcbilq"/></g>`,
		"fallback": "withicons:more-horizontal-blueprint",
	});
}

export default Component;
