import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vz2h5_iau.css';
import '../../css/z/z6ho4bbnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary vz2h5_iau"/><path class="primary z6ho4bbnn"/></g>`,
		"fallback": "iconaut:puzzle-check-duotone",
	});
}

export default Component;
