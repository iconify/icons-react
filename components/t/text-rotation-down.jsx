import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hjcuwvbjp.css';
import '../../css/d/dyte66b2f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="hjcuwvbjp"/><path class="dyte66b2f"/></g>`,
		"fallback": "icon-park:text-rotation-down",
	});
}

export default Component;
