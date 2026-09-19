import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/r/rlbmq77gc.css';
import '../../css/p/p-67x_y3b.css';
import '../../css/r/rd3vi7oyg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="rlbmq77gc"/><path class="p-67x_y3b"/><path class="rd3vi7oyg"/></g>`,
		"fallback": "icon-park-outline:mascara",
	});
}

export default Component;
