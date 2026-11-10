import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gdj5xab5v.css';
import '../../css/t/t9ce9_r2f.css';
import '../../css/v/vr45wkbit.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gdj5xab5v"/><path class="t9ce9_r2f"/><path class="vr45wkbit"/></g>`,
		"fallback": "at-icons:people-plus",
	});
}

export default Component;
