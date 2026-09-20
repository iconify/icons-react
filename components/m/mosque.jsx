import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dwyomxb4c.css';
import '../../css/k/k82vtibwo.css';
import '../../css/g/g8lts85lh.css';
import '../../css/l/lna12zbhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dwyomxb4c"/><path class="k82vtibwo"/><path class="g8lts85lh"/><path class="lna12zbhx"/></g>`,
		"fallback": "tdesign:mosque",
	});
}

export default Component;
