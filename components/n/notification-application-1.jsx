import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y5c-idbjg.css';
import '../../css/a/a8pyjk2nh.css';
import '../../css/n/n29z0kbys.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y5c-idbjg"/><path clip-rule="evenodd" class="a8pyjk2nh"/><path class="n29z0kbys"/></g>`,
		"fallback": "streamline-color:notification-application-1",
	});
}

export default Component;
