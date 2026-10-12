import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xoyiombli.css';
import '../../css/k/krd881dju.css';
import '../../css/y/yt4usfxhx.css';
import '../../css/r/rgdep-bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xoyiombli"/><path class="krd881dju"/><rect class="yt4usfxhx"/><path class="rgdep-bwy"/></g>`,
		"fallback": "andrsrxn:rotate-circle-lock",
	});
}

export default Component;
