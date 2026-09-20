import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojelefysz.css';
import '../../css/f/f4-czetnd.css';
import '../../css/k/k8ff1l3kr.css';
import '../../css/n/nr8wjwbhx.css';
import '../../css/a/ab_dfub4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ojelefysz"/><path class="f4-czetnd"/><path class="k8ff1l3kr"/><path class="nr8wjwbhx"/><path class="ab_dfub4l"/></g>`,
		"fallback": "streamline-ultimate-color:screen-curved",
	});
}

export default Component;
