import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/g/guewfbcxi.css';
import '../../css/i/iofdikb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="guewfbcxi"/><path class="iofdikb8s"/></g>`,
		"fallback": "reicon:setting2",
	});
}

export default Component;
