import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lm2ymhajh.css';
import '../../css/n/n2ymwbb0b.css';
import '../../css/e/esz-hmbev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lm2ymhajh"/><path class="n2ymwbb0b"/><path class="esz-hmbev"/></g>`,
		"fallback": "streamline-plump-color:telescope-flat",
	});
}

export default Component;
