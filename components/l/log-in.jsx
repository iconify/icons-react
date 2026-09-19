import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n8ju1ahng.css';
import '../../css/g/gr8rvhted.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n8ju1ahng"/><path class="gr8rvhted"/></g>`,
		"fallback": "mono-icons:log-in",
	});
}

export default Component;
