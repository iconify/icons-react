import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uztmj3dza.css';
import '../../css/e/e-joak7oo.css';
import '../../css/f/flvj7da2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uztmj3dza"/><path class="e-joak7oo"/><path class="flvj7da2o"/></g>`,
		"fallback": "hugeicons:settings-04",
	});
}

export default Component;
