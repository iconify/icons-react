import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xujsi_bui.css';
import '../../css/g/gp92iuk-i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xujsi_bui"/><path clip-rule="evenodd" class="gp92iuk-i"/></g>`,
		"fallback": "healthicons:sodium-free2x-outline",
	});
}

export default Component;
