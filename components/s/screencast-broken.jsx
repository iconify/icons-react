import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mnp-46y7d.css';
import '../../css/s/sdldar-9p.css';
import '../../css/y/yaqv4iv0o.css';
import '../../css/z/zwy84xboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mnp-46y7d"/><path class="sdldar-9p"/><path class="yaqv4iv0o"/><path class="zwy84xboo"/></g>`,
		"fallback": "solar:screencast-broken",
	});
}

export default Component;
