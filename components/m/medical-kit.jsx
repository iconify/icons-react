import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/okvu0ui1q.css';
import '../../css/e/e8e9occnp.css';
import '../../css/m/mdux50sgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="okvu0ui1q"/><path clip-rule="evenodd" class="e8e9occnp"/><path clip-rule="evenodd" class="mdux50sgn"/></g>`,
		"fallback": "reicon:medical-kit",
	});
}

export default Component;
