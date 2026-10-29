import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sb9vkzbhd.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/j/jffir3tnu.css';
import '../../css/q/q1ap8wbyv.css';
import '../../css/q/qz5pats7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="sb9vkzbhd wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="jffir3tnu wm-k"/><path class="q1ap8wbyv wm-a"/><path class="qz5pats7o wm-s"/></g>`,
		"fallback": "withicons:love-letter-blueprint",
	});
}

export default Component;
