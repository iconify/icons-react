import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l2ou10csi.css';
import '../../css/f/f7ty-7bko.css';
import '../../css/g/gsfl8rd0i.css';
import '../../css/c/ct8yzwbnu.css';
import '../../css/n/n6z8fvbqf.css';
import '../../css/z/zxefmh5ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l2ou10csi wm-shadow"/><path class="f7ty-7bko"/><path class="gsfl8rd0i"/><path class="ct8yzwbnu"/><path class="n6z8fvbqf"/><path class="zxefmh5ps"/></g>`,
		"fallback": "withicons-retro:mushroom",
	});
}

export default Component;
