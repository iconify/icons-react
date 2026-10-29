import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zqi7n5vpo.css';
import '../../css/a/av5roibzc.css';
import '../../css/m/mhdr543mh.css';
import '../../css/k/kzy2krb6a.css';
import '../../css/z/ziv0n64rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zqi7n5vpo"/><path class="av5roibzc wm-deco"/><path class="mhdr543mh wm-deco"/><path class="kzy2krb6a"/><path class="ziv0n64rr"/></g>`,
		"fallback": "withicons:quote-blueprint",
	});
}

export default Component;
