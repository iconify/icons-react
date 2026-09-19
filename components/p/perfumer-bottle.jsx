import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/su3eclbrf.css';
import '../../css/d/d29i29jal.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="su3eclbrf"/><path class="d29i29jal"/></g>`,
		"fallback": "icon-park-outline:perfumer-bottle",
	});
}

export default Component;
