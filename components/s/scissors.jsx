import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jw6rkebmt.css';
import '../../css/s/ss8lgbcwv.css';
import '../../css/p/psdc-ub0r.css';
import '../../css/a/a4ypdebsh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jw6rkebmt"/><path class="ss8lgbcwv"/><path class="psdc-ub0r"/><circle class="a4ypdebsh"/></g>`,
		"fallback": "et:scissors",
	});
}

export default Component;
