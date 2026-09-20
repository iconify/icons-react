import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bdnhst0ia.css';
import '../../css/v/v4cp4-zwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bdnhst0ia"/><path class="v4cp4-zwx"/></g>`,
		"fallback": "reicon:palette2-duotone",
	});
}

export default Component;
