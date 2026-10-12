import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2ht35-si.css';
import '../../css/z/zpa45dbgg.css';
import '../../css/z/zcr29hbxq.css';
import '../../css/e/ebo8zjbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.58 10.37)" class="v2ht35-si"/><path class="zpa45dbgg"/><rect transform="matrix(0 -1 -1 0 21.58 10.37)" class="zcr29hbxq"/><path class="ebo8zjbpu"/></g>`,
		"fallback": "andrsrxn:playlist-first",
	});
}

export default Component;
