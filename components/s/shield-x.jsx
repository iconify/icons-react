import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xrfn3bcyz.css';
import '../../css/k/k5u3p5bnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xrfn3bcyz"/><path class="k5u3p5bnt wm-a"/></g>`,
		"fallback": "withicons:shield-x",
	});
}

export default Component;
