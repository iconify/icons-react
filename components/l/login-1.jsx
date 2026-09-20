import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hu7epyb8d.css';
import '../../css/g/g5ksf45rz.css';
import '../../css/d/dzpv33b3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hu7epyb8d"/><path class="g5ksf45rz"/><path class="dzpv33b3m"/></g>`,
		"fallback": "streamline-ultimate-color:login-1",
	});
}

export default Component;
