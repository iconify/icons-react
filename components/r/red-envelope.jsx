import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t3bjmac6x.css';
import '../../css/u/u5bgjcbep.css';
import '../../css/v/vxalzhx-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t3bjmac6x wm-k"/><path class="u5bgjcbep wm-s"/><path class="vxalzhx-j"/></g>`,
		"fallback": "withicons-bauhaus:red-envelope",
	});
}

export default Component;
