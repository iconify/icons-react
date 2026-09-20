import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/exdmtsbst.css';
import '../../css/c/cq0pnj2xi.css';
import '../../css/u/utvuz8bri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="exdmtsbst"/><path class="cq0pnj2xi"/><path class="utvuz8bri"/></g>`,
		"fallback": "streamline-freehand-color:meeting-user-man-stress",
	});
}

export default Component;
