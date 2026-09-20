import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vi_-236it.css';
import '../../css/h/h5rfeh34x.css';
import '../../css/v/vnpd8_boz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vi_-236it"/><path class="h5rfeh34x"/><path clip-rule="evenodd" class="vnpd8_boz"/></g>`,
		"fallback": "streamline-flex-color:watch-circle-charging-flat",
	});
}

export default Component;
