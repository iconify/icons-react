import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kun71ryne.css';
import '../../css/o/off1vrrsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="kun71ryne"/><path class="off1vrrsk"/></g>`,
		"fallback": "lets-icons:message-open-light",
	});
}

export default Component;
