import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vm3gefi1v.css';
import '../../css/s/shy5b-bwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vm3gefi1v"/><path class="shy5b-bwp"/></g>`,
		"fallback": "reicon:map-arrow-square-duotone",
	});
}

export default Component;
