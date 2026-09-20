import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xpdm4q3cf.css';
import '../../css/q/qeiqg-h8r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xpdm4q3cf"/><path clip-rule="evenodd" class="qeiqg-h8r"/></g>`,
		"fallback": "streamline-flex-color:return-square-2-flat",
	});
}

export default Component;
