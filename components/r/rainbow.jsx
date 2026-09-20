import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlvuvsydb.css';
import '../../css/p/pum862k0d.css';
import '../../css/t/txt-57beh.css';
import '../../css/y/ywovnsbpk.css';
import '../../css/m/mzuofd_-f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nlvuvsydb"/><path clip-rule="evenodd" class="pum862k0d"/><path class="txt-57beh"/><path class="ywovnsbpk"/><path class="mzuofd_-f"/></g>`,
		"fallback": "streamline-color:rainbow",
	});
}

export default Component;
