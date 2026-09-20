import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7jibfbce.css';
import '../../css/j/j4r9vwtdx.css';
import '../../css/h/hlf8r6vle.css';
import '../../css/d/de9x5pb7n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7jibfbce"/><path class="j4r9vwtdx"/><path class="hlf8r6vle"/><path class="de9x5pb7n"/></g>`,
		"fallback": "streamline-color:shipment-check",
	});
}

export default Component;
