import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/m/m-p9z5hbj.css';
import '../../css/h/h9n-vnbef.css';
import '../../css/m/mjpwsgb_v.css';
import '../../css/r/rnbe3rl5g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="m-p9z5hbj"/><rect class="h9n-vnbef"/><path class="mjpwsgb_v"/><path class="rnbe3rl5g"/></g>`,
		"fallback": "icon-park:receive",
	});
}

export default Component;
