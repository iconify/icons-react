import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/o/osxjw29nz.css';
import '../../css/x/xzmq84bei.css';
import '../../css/m/mzfuw8b7e.css';
import '../../css/p/p_z7rc6xw.css';
import '../../css/p/pmb-dxz1w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="osxjw29nz"/><path clip-rule="evenodd" class="xzmq84bei"/></g><path clip-rule="evenodd" class="mzfuw8b7e"/><path class="p_z7rc6xw"/><path clip-rule="evenodd" class="pmb-dxz1w"/></g>`,
		"fallback": "pepicons-print:paint-pallet",
	});
}

export default Component;
