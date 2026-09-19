import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n5_t02bgg.css';
import '../../css/w/wd1jffbjv.css';
import '../../css/x/x8qkyufxd.css';
import '../../css/e/enjmpnbej.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle transform="rotate(40 29.463 16.989)" class="n5_t02bgg"/><path class="wd1jffbjv"/><path class="x8qkyufxd"/><path class="enjmpnbej"/></g>`,
		"fallback": "icon-park:rattle-one",
	});
}

export default Component;
