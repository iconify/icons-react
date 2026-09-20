import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co1npnfqd.css';
import '../../css/q/qzgw7kbnn.css';
import '../../css/o/oct1nbijs.css';
import '../../css/o/o3kpvxbzf.css';
import '../../css/d/dmors1zgq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="co1npnfqd"/><path class="qzgw7kbnn"/><path class="oct1nbijs"/><path class="o3kpvxbzf"/><path class="dmors1zgq"/></g>`,
		"fallback": "streamline-color:lock-rotation",
	});
}

export default Component;
