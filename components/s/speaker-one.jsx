import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/ddtcgulvx.css';
import '../../css/u/uptpsmn0f.css';
import '../../css/p/pp3ihrork.css';
import '../../css/y/yi2umkbkb.css';
import '../../css/r/r1kxxzn7q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="ddtcgulvx"/><path class="uptpsmn0f"/><path class="pp3ihrork"/><path class="yi2umkbkb"/><path class="r1kxxzn7q"/></g>`,
		"fallback": "icon-park:speaker-one",
	});
}

export default Component;
