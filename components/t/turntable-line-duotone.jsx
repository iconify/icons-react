import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iaha13btl.css';
import '../../css/z/zhaqmra8c.css';
import '../../css/b/bi65t-brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iaha13btl"/><path class="zhaqmra8c"/><path class="bi65t-brz"/></g>`,
		"fallback": "solar:turntable-line-duotone",
	});
}

export default Component;
