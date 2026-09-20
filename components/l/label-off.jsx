import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/y/yv_ddbm3i.css';
import '../../css/l/lk771nbmv.css';
import '../../css/f/f1dvenbne.css';
import '../../css/e/earle6b1m.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="yv_ddbm3i"/><path clip-rule="evenodd" class="lk771nbmv"/></g><path clip-rule="evenodd" class="f1dvenbne"/><path clip-rule="evenodd" class="earle6b1m"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:label-off",
	});
}

export default Component;
