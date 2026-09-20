import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vu12gcbpt.css';
import '../../css/c/cgk8wsbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vu12gcbpt"/><path class="cgk8wsbcl"/></g>`,
		"fallback": "mynaui:letter-w-octagon",
	});
}

export default Component;
