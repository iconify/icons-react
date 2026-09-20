import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sn4irxblh.css';
import '../../css/h/h6bbj54jq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sn4irxblh"/><path clip-rule="evenodd" class="h6bbj54jq"/></g>`,
		"fallback": "streamline-sharp-color:leaf-flat",
	});
}

export default Component;
