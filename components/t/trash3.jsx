import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vh42gtbvd.css';
import '../../css/q/qj7h4sgyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vh42gtbvd"/><path class="qj7h4sgyo"/></g>`,
		"fallback": "reicon:trash3",
	});
}

export default Component;
