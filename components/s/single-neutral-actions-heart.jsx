import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uye8a_knn.css';
import '../../css/g/gwzyt040k.css';
import '../../css/u/ub3pscbsu.css';
import '../../css/g/gr8ewcbmx.css';
import '../../css/h/h-xs50ubx.css';
import '../../css/y/yt_eb7h5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uye8a_knn"/><path class="gwzyt040k"/><path class="ub3pscbsu"/><path class="gr8ewcbmx"/><path class="h-xs50ubx"/><path class="yt_eb7h5x"/></g>`,
		"fallback": "streamline-ultimate-color:single-neutral-actions-heart",
	});
}

export default Component;
