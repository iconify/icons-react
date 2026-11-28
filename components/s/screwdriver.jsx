import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/ryf9-cbba.css';
import '../../css/s/s_4n11k-r.css';
import '../../css/x/x772mmbtf.css';
import '../../css/e/e3p8-oh0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ryf9-cbba"/><path class="s_4n11k-r"/><path class="x772mmbtf"/><path class="e3p8-oh0d"/></g>`,
		"fallback": "iconaut:screwdriver",
	});
}

export default Component;
