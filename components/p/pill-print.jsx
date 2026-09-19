import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/owfeisrst.css';
import '../../css/p/putt_dyyu.css';
import '../../css/l/lr9b8khur.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="owfeisrst"/><path clip-rule="evenodd" class="putt_dyyu"/><path class="lr9b8khur"/></g>`,
		"fallback": "pepicons:pill-print",
	});
}

export default Component;
