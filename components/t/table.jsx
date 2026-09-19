import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m7se3rbus.css';
import '../../css/u/upnls3bjj.css';
import '../../css/w/wg78zkb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m7se3rbus"/><path class="upnls3bjj"/><path class="wg78zkb7p"/></g>`,
		"fallback": "hugeicons:table",
	});
}

export default Component;
