import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3kb4cgpl.css';
import '../../css/r/r3njy2b3d.css';
import '../../css/j/jskd55kvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="r3kb4cgpl"><path class="r3njy2b3d"/><path class="jskd55kvy"/></g>`,
		"fallback": "iconamoon:volume-off-bold",
	});
}

export default Component;
