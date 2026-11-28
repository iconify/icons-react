import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g5i7kbbtu.css';
import '../../css/s/sinwfubfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g5i7kbbtu secondary"/><path class="primary sinwfubfc"/></g>`,
		"fallback": "iconaut:pitcher-duotone",
	});
}

export default Component;
