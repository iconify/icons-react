import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qgf9veboy.css';
import '../../css/o/ov4h-ebxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qgf9veboy"/><path class="ov4h-ebxs"/></g>`,
		"fallback": "streamline-ultimate:vpn-shield",
	});
}

export default Component;
