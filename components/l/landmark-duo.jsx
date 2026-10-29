import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nd4r1gbgv.css';
import '../../css/a/ar0r6f66r.css';
import '../../css/m/mpixi68ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nd4r1gbgv"/><path class="ar0r6f66r wm-a"/><path class="mpixi68ce"/></g>`,
		"fallback": "withicons:landmark-duo",
	});
}

export default Component;
