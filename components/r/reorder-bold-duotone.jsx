import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/v/vsuoryj1l.css';
import '../../css/b/bxk5hzbkz.css';
import '../../css/h/h4li_nw0g.css';
import '../../css/s/sd1l2tbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="vsuoryj1l"/><path class="bxk5hzbkz"/><path class="h4li_nw0g"/><path class="sd1l2tbyv"/></g>`,
		"fallback": "solar:reorder-bold-duotone",
	});
}

export default Component;
