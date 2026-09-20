import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tl6bylb_f.css';
import '../../css/u/uw6bw23mq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tl6bylb_f"/><path class="uw6bw23mq"/></g>`,
		"fallback": "reicon:sunset-filled",
	});
}

export default Component;
