import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/txtugcb9p.css';
import '../../css/g/gxfc2_h2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="txtugcb9p"/><path class="gxfc2_h2g"/></g>`,
		"fallback": "matita:settings",
	});
}

export default Component;
