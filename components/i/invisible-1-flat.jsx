import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qxatubb2b.css';
import '../../css/m/mki_rwb3s.css';
import '../../css/v/vbyqusbtg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qxatubb2b"/><path class="mki_rwb3s"/><path clip-rule="evenodd" class="vbyqusbtg"/></g>`,
		"fallback": "streamline-flex-color:invisible-1-flat",
	});
}

export default Component;
