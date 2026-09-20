import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l7i1k0bst.css';
import '../../css/t/tncwp6bgy.css';
import '../../css/g/gjraafcmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l7i1k0bst"/><path class="tncwp6bgy"/><path class="gjraafcmt"/></g>`,
		"fallback": "solar:smartphone-2-bold-duotone",
	});
}

export default Component;
