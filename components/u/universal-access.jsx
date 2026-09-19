import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wknanbbjf.css';
import '../../css/x/x9hbbzbwd.css';
import '../../css/s/sz0mrrb6a.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wknanbbjf"/><circle class="x9hbbzbwd"/><path class="sz0mrrb6a"/></g>`,
		"fallback": "foundation:universal-access",
	});
}

export default Component;
