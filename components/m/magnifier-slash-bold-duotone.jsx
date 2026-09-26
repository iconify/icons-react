import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r0xhknb7f.css';
import '../../css/i/iuuyciexp.css';
import '../../css/p/pucyqmzrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="r0xhknb7f"/><path class="iuuyciexp"/><path class="pucyqmzrg"/></g>`,
		"fallback": "solar:magnifier-slash-bold-duotone",
	});
}

export default Component;
