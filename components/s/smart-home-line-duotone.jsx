import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cyl9zjekg.css';
import '../../css/w/wo5j09bdc.css';
import '../../css/y/yt8px34lk.css';
import '../../css/v/vciis7brh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cyl9zjekg"/><path class="wo5j09bdc"/><path class="yt8px34lk"/><path class="vciis7brh"/></g>`,
		"fallback": "solar:smart-home-line-duotone",
	});
}

export default Component;
