import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/ka9y6lbbx.css';
import '../../css/p/p03jw5u7r.css';
import '../../css/w/wh0ka_bqq.css';
import '../../css/e/ee3yy3d7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ka9y6lbbx wm-shadow"/><path class="p03jw5u7r wm-shadow"/><path class="wh0ka_bqq"/><path class="ee3yy3d7d"/></g>`,
		"fallback": "withicons-brutal:notepad-text",
	});
}

export default Component;
