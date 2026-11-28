import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz5st3bpk.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gfobeg0lq.css';
import '../../css/q/qs14mnbed.css';
import '../../css/e/eviyv_ucu.css';
import '../../css/o/o2zzmo-mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz5st3bpk secondary"/><g class="dt0cm9dhy primary"><path class="gfobeg0lq"/><path class="qs14mnbed"/><path class="eviyv_ucu"/><path class="o2zzmo-mf"/></g>`,
		"fallback": "iconaut:sandwich-duo",
	});
}

export default Component;
