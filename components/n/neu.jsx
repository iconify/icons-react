import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lacu5d_xy.css';
import '../../css/m/md286fbip.css';
import '../../css/j/jjtuc-t1o.css';
import '../../css/p/p9xjhsbce.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="lacu5d_xy"/><g class="md286fbip"><path class="jjtuc-t1o"/><path class="p9xjhsbce"/></g></g>`,
		"fallback": "cryptocurrency-color:neu",
	});
}

export default Component;
