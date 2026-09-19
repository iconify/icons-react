import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nphq31ziy.css';
import '../../css/x/xqs6_qbaj.css';
import '../../css/y/y050835xc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="nphq31ziy"/><path class="xqs6_qbaj"/><path class="y050835xc"/></g>`,
		"fallback": "icon-park:tiger-zodiac",
	});
}

export default Component;
