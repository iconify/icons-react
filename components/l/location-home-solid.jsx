import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d27mk9b5m.css';
import '../../css/t/tdij9l8wx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d27mk9b5m"/><path class="tdij9l8wx"/></g>`,
		"fallback": "mynaui:location-home-solid",
	});
}

export default Component;
