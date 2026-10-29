import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w0wsd5bps.css';
import '../../css/i/ij97w0b8s.css';
import '../../css/q/qgg_1mbmz.css';
import '../../css/l/lwl9xzb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="w0wsd5bps"/><path class="ij97w0b8s"/><path class="qgg_1mbmz"/><path class="lwl9xzb4m"/></g>`,
		"fallback": "withicons-bauhaus:lock-keyhole",
	});
}

export default Component;
