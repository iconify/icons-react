import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/op2_qvb8o.css';
import '../../css/k/k84vtocml.css';
import '../../css/b/bropegbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="op2_qvb8o wm-a"/><path class="k84vtocml"/><path class="bropegbcq wm-a"/></g>`,
		"fallback": "withicons:scale-duo",
	});
}

export default Component;
