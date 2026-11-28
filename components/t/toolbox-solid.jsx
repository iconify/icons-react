import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oum1aoa0r.css';
import '../../css/s/s2bq498ec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oum1aoa0r"/><path class="s2bq498ec"/></g>`,
		"fallback": "iconaut:toolbox-solid",
	});
}

export default Component;
