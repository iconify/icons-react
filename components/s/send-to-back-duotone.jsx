import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q-c9bacjl.css';
import '../../css/r/rudtpgbeh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q-c9bacjl"/><path class="rudtpgbeh"/></g>`,
		"fallback": "pullo:send-to-back-duotone",
	});
}

export default Component;
