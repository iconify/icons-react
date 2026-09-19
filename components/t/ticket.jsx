import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/d/do3-46sfv.css';
import '../../css/d/dkfj0ub_t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="do3-46sfv"/><path class="dkfj0ub_t"/></g>`,
		"fallback": "icon-park-outline:ticket",
	});
}

export default Component;
