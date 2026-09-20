import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cc1czgsqt.css';
import '../../css/o/oqmexpbla.css';
import '../../css/c/c_zdt_bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cc1czgsqt"/><path class="oqmexpbla"/><path class="c_zdt_bqs"/></g>`,
		"fallback": "solar:user-block-rounded-bold",
	});
}

export default Component;
