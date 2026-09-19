import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt50z_byh.css';
import '../../css/v/v1lzvlbpn.css';
import '../../css/h/h65up44bo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt50z_byh"/><path class="v1lzvlbpn"/><path class="h65up44bo"/>`,
		"fallback": "devicon:rstudio",
	});
}

export default Component;
