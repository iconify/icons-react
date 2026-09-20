import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o5wplb8az.css';
import '../../css/v/vh953qb-o.css';
import '../../css/v/vu5m30bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o5wplb8az"/><path clip-rule="evenodd" class="vh953qb-o"/><path class="vu5m30bjp"/></g>`,
		"fallback": "reicon:mask-sad",
	});
}

export default Component;
