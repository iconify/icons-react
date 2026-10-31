import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c0r_anbxk.css';
import '../../css/u/u7-vqsbnq.css';
import '../../css/i/io720hb-d.css';
import '../../css/o/ormp8kbuu.css';
import '../../css/q/q34ya56zz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="c0r_anbxk wm-shadow"/><path class="u7-vqsbnq wm-shadow"/><path class="io720hb-d"/><path class="ormp8kbuu"/><path class="q34ya56zz wm-s"/></g>`,
		"fallback": "withicons-brutal:sunrise",
	});
}

export default Component;
