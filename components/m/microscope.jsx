import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kf64mebyu.css';
import '../../css/p/p8yrg0x8f.css';
import '../../css/p/p28w8bcvx.css';
import '../../css/w/wo89xnbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kf64mebyu"/><path class="p8yrg0x8f wm-k"/><path class="p28w8bcvx wm-a"/><path class="wm-deco wo89xnbgv"/></g>`,
		"fallback": "withicons-kawaii:microscope",
	});
}

export default Component;
