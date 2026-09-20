import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/g/gxqb1vwzx.css';
import '../../css/l/lu8yh13pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="gxqb1vwzx"/><path class="lu8yh13pg"/></g>`,
		"fallback": "streamline-logos:trello-logo",
	});
}

export default Component;
