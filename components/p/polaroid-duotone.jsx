import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gx_2al-pk.css';
import '../../css/a/amciz6b0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gx_2al-pk secondary"/><path class="amciz6b0e primary"/></g>`,
		"fallback": "iconaut:polaroid-duotone",
	});
}

export default Component;
