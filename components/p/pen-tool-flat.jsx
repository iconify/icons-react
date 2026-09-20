import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyt-y7hmq.css';
import '../../css/q/qmg53lbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kyt-y7hmq"/><path clip-rule="evenodd" class="qmg53lbmr"/></g>`,
		"fallback": "streamline-sharp-color:pen-tool-flat",
	});
}

export default Component;
