import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ts2mgqkxa.css';
import '../../css/w/w9t2-kb7r.css';
import '../../css/l/lr31_5_hh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ts2mgqkxa"/><path class="w9t2-kb7r"/><path class="lr31_5_hh"/></g>`,
		"fallback": "streamline-color:snorkle",
	});
}

export default Component;
