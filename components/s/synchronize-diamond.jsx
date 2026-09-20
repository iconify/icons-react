import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at2dx1rbn.css';
import '../../css/c/c9__knb3x.css';
import '../../css/e/ei_ncnbvb.css';
import '../../css/x/xpihgph7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="at2dx1rbn"><path class="c9__knb3x"/><path class="ei_ncnbvb"/><path class="xpihgph7i"/></g>`,
		"fallback": "streamline-cyber-color:synchronize-diamond",
	});
}

export default Component;
