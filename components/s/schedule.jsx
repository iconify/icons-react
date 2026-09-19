import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/w/wy2fffbal.css';
import '../../css/p/pt3ta8bfq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><rect class="wy2fffbal"/><path class="pt3ta8bfq"/></g>`,
		"fallback": "icon-park-outline:schedule",
	});
}

export default Component;
