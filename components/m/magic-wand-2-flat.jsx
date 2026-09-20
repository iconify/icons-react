import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbeiktdsw.css';
import '../../css/g/ggyq1bcpl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qbeiktdsw"/><path class="ggyq1bcpl"/></g>`,
		"fallback": "streamline-flex-color:magic-wand-2-flat",
	});
}

export default Component;
