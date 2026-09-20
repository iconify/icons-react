import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbgvcxwad.css';
import '../../css/d/dtzi191yu.css';
import '../../css/x/x9kylos5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="dbgvcxwad"/><path class="dtzi191yu"/><path class="x9kylos5c"/></g>`,
		"fallback": "proicons:pie-chart",
	});
}

export default Component;
