import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x_bc36b2h.css';
import '../../css/o/oco87xb9u.css';
import '../../css/v/vr45wkbit.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x_bc36b2h"/><path class="oco87xb9u"/><path class="vr45wkbit"/></g>`,
		"fallback": "at-icons:people-cross",
	});
}

export default Component;
