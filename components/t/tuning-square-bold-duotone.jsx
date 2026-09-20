import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/o/ompl6cb8y.css';
import '../../css/l/leukf6srv.css';
import '../../css/c/ci3vtc_nb.css';
import '../../css/b/bh3zqiuiw.css';
import '../../css/o/ocr6ehpxy.css';
import '../../css/e/ezf4h5dph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="ompl6cb8y"/><path class="leukf6srv"/><path class="ci3vtc_nb"/><path class="bh3zqiuiw"/><path clip-rule="evenodd" class="ocr6ehpxy"/><path clip-rule="evenodd" class="ezf4h5dph"/></g>`,
		"fallback": "solar:tuning-square-bold-duotone",
	});
}

export default Component;
