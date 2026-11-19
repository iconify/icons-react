import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjf0rgq0f.css';
import '../../css/x/xrryuoepz.css';
import '../../css/o/og3naoa1l.css';
import '../../css/t/tsmv2xneh.css';
import '../../css/t/tm66hibfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fjf0rgq0f"/><path class="xrryuoepz"/><path class="og3naoa1l"/><path class="tsmv2xneh"/><path class="tm66hibfp"/></g>`,
		"fallback": "andrsrxn:mountains",
	});
}

export default Component;
