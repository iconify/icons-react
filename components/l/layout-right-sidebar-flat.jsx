import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wpo4neblx.css';
import '../../css/l/l8-b7wbpb.css';
import '../../css/r/rr-9ahbgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wpo4neblx"/><path class="l8-b7wbpb"/><path clip-rule="evenodd" class="rr-9ahbgt"/></g>`,
		"fallback": "streamline-sharp-color:layout-right-sidebar-flat",
	});
}

export default Component;
