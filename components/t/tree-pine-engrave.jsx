import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rethg_bnn.css';
import '../../css/g/guep-fzel.css';
import '../../css/z/z_9w-cekl.css';
import '../../css/b/b33sfbyeh.css';
import '../../css/q/qxnk23bzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rethg_bnn wm-k"/><path class="guep-fzel wm-a"/><path class="wm-shadow z_9w-cekl"/><path class="b33sfbyeh wm-k"/><path class="qxnk23bzr wm-a"/></g>`,
		"fallback": "withicons:tree-pine-engrave",
	});
}

export default Component;
