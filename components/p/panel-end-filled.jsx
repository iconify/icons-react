import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jihz6sb_e.css';
import '../../css/q/qmqz-qbiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jihz6sb_e"/><path class="qmqz-qbiw"/></g>`,
		"fallback": "andrsrxn:panel-end-filled",
	});
}

export default Component;
