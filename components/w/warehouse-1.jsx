import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/f/faj6pbcic.css';
import '../../css/z/zw6nc9byf.css';
import '../../css/y/y9z0mibmw.css';
import '../../css/d/d_sriuk2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="faj6pbcic"/><path class="zw6nc9byf"/><path class="y9z0mibmw"/><path class="d_sriuk2w"/></g>`,
		"fallback": "streamline-sharp-color:warehouse-1",
	});
}

export default Component;
