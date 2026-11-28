import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/afft3jbuq.css';
import '../../css/e/ecmah_t3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="afft3jbuq"/><path class="ecmah_t3t"/></g>`,
		"fallback": "iconaut:tab-group-solid",
	});
}

export default Component;
