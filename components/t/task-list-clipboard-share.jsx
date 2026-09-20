import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sqm5gsvzg.css';
import '../../css/d/dcda15btx.css';
import '../../css/a/amul4stfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sqm5gsvzg"/><path class="dcda15btx"/><path class="amul4stfz"/></g>`,
		"fallback": "streamline-freehand-color:task-list-clipboard-share",
	});
}

export default Component;
