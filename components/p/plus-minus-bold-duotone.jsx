import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hl9_mob0i.css';
import '../../css/n/nr49yeblg.css';
import '../../css/l/lrqda5b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hl9_mob0i"/><path clip-rule="evenodd" class="nr49yeblg"/><path class="lrqda5b7y"/></g>`,
		"fallback": "solar:plus-minus-bold-duotone",
	});
}

export default Component;
