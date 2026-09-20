import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjdr1c_6y.css';
import '../../css/f/fho1qxb_o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fjdr1c_6y"/><path class="fho1qxb_o"/></g>`,
		"fallback": "streamline-flex-color:texture",
	});
}

export default Component;
