import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdysgyb5v.css';
import '../../css/f/fanbg0uym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zdysgyb5v"/><path class="fanbg0uym"/></g>`,
		"fallback": "streamline-sharp-color:trophy-flat",
	});
}

export default Component;
