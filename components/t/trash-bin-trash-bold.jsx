import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dn68vbb_a.css';
import '../../css/s/sv3zhyagg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dn68vbb_a"/><path clip-rule="evenodd" class="sv3zhyagg"/></g>`,
		"fallback": "solar:trash-bin-trash-bold",
	});
}

export default Component;
