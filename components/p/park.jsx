import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sgwsw-_rl.css';
import '../../css/d/dgnlnyb4l.css';
import '../../css/k/khbna04ud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sgwsw-_rl"/><path class="dgnlnyb4l"/><circle class="khbna04ud"/></g>`,
		"fallback": "lucide:park",
	});
}

export default Component;
