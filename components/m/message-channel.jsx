import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exynw60od.css';
import '../../css/f/fv3l_rq4r.css';
import '../../css/s/ss458-5ip.css';
import '../../css/l/lliz-h_ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="exynw60od"/><path class="fv3l_rq4r"/><circle transform="rotate(90 12.57 12)" class="ss458-5ip"/><path class="lliz-h_ls"/></g>`,
		"fallback": "andrsrxn:message-channel",
	});
}

export default Component;
