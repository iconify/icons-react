import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/tb8_i_qfq.css';
import '../../css/a/acnmh7b9b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="tb8_i_qfq"/><path class="acnmh7b9b"/></g>`,
		"fallback": "streamline-flex:location-pin-medical-hospital-2",
	});
}

export default Component;
