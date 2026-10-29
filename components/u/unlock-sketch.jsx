import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aykbejljt.css';
import '../../css/v/vd-u-mbdv.css';
import '../../css/g/g73p47bsz.css';
import '../../css/y/y7zzpobdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="aykbejljt"/><path class="vd-u-mbdv wm-a"/><path class="g73p47bsz wm-k"/><path class="wm-a y7zzpobdc"/></g>`,
		"fallback": "withicons:unlock-sketch",
	});
}

export default Component;
