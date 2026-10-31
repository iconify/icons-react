import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yfe3_sb2e.css';
import '../../css/s/scezyjwef.css';
import '../../css/y/ykjdoh4bh.css';
import '../../css/o/odrsyhb7n.css';
import '../../css/k/kjsj_z2dp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow yfe3_sb2e"/><path class="scezyjwef"/><path class="ykjdoh4bh"/><path class="odrsyhb7n"/><path class="kjsj_z2dp"/></g>`,
		"fallback": "withicons-retro:skip-forward",
	});
}

export default Component;
