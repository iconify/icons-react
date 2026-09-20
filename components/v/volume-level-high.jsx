import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfeo93_vz.css';
import '../../css/g/gpqcxdbjh.css';
import '../../css/s/s19iiybot.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yfeo93_vz"/><path class="gpqcxdbjh"/><path class="s19iiybot"/></g>`,
		"fallback": "streamline-color:volume-level-high",
	});
}

export default Component;
