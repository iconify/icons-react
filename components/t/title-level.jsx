import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/j/jnmm7-kdb.css';
import '../../css/w/wld8d01cv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="jnmm7-kdb"/><path class="wld8d01cv"/></g>`,
		"fallback": "icon-park-outline:title-level",
	});
}

export default Component;
