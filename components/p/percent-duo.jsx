import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e63f8fq3m.css';
import '../../css/o/oqdxdpjwb.css';
import '../../css/b/bb8vnzh5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e63f8fq3m wm-a"/><path class="oqdxdpjwb"/><path class="bb8vnzh5z wm-a"/></g>`,
		"fallback": "withicons:percent-duo",
	});
}

export default Component;
