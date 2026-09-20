import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g7y3joj3o.css';
import '../../css/i/irzxfpvcc.css';
import '../../css/g/gdeocxngl.css';
import '../../css/u/uc4n94bsq.css';
import '../../css/d/dwp-m7jgx.css';
import '../../css/i/ikcp8fb2i.css';
import '../../css/u/u4t-r9xag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g7y3joj3o"/><path class="irzxfpvcc"/><path class="gdeocxngl"/><path class="uc4n94bsq"/><path class="dwp-m7jgx"/><path class="ikcp8fb2i"/><path class="u4t-r9xag"/></g>`,
		"fallback": "solar:server-square-cloud-line-duotone",
	});
}

export default Component;
