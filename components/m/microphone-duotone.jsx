import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gtmxuwkrn.css';
import '../../css/m/m717onbqp.css';
import '../../css/r/rx2lt8xhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gtmxuwkrn"/><path class="m717onbqp"/><path class="rx2lt8xhq"/></g>`,
		"fallback": "reicon:microphone-duotone",
	});
}

export default Component;
