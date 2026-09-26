import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujjms90kd.css';
import '../../css/v/vm68qtbnt.css';
import '../../css/m/mjf9o-3hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ujjms90kd"/><path class="vm68qtbnt"/><path class="mjf9o-3hs"/></g>`,
		"fallback": "solar:panel-bottom-close-bold-duotone",
	});
}

export default Component;
