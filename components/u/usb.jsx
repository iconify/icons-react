import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2qslhbnv.css';
import '../../css/h/h8poafcho.css';
import '../../css/d/dh2skybyq.css';
import '../../css/u/ub3e2sbvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2qslhbnv"/><path class="h8poafcho"/><path class="dh2skybyq"/><path class="ub3e2sbvd"/>`,
		"fallback": "withicons-bauhaus:usb",
	});
}

export default Component;
