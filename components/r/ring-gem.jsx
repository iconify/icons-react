import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bw-zzjbtx.css';
import '../../css/v/vekd1sb9s.css';
import '../../css/w/wv7y8abmr.css';
import '../../css/a/arsx11b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bw-zzjbtx"/><path class="vekd1sb9s"/><path class="wv7y8abmr"/><path class="arsx11b2s"/></g>`,
		"fallback": "andrsrxn:ring-gem",
	});
}

export default Component;
