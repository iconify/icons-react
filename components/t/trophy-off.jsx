import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b_svlibxp.css';
import '../../css/j/j6g7fh9mm.css';
import '../../css/a/aptgf3b3w.css';
import '../../css/o/ogtc2yb-a.css';
import '../../css/g/gcaxlpn6i.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b_svlibxp"/><path clip-rule="evenodd" class="j6g7fh9mm"/><path clip-rule="evenodd" class="aptgf3b3w"/><path clip-rule="evenodd" class="ogtc2yb-a"/><path clip-rule="evenodd" class="gcaxlpn6i"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:trophy-off",
	});
}

export default Component;
