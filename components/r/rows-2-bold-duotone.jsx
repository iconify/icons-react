import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/auoh6xb5o.css';
import '../../css/t/tlyj1gbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="auoh6xb5o"/><path class="tlyj1gbrg"/></g>`,
		"fallback": "solar:rows-2-bold-duotone",
	});
}

export default Component;
