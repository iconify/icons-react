import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j7o24jbxk.css';
import '../../css/r/r5t7v1brt.css';
import '../../css/f/fbjte8bpo.css';
import '../../css/f/f161wdbbo.css';
import '../../css/f/fi5wyfwwo.css';
import '../../css/n/n8qbuufsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j7o24jbxk"/><path class="r5t7v1brt"/><path class="fbjte8bpo"/><path class="f161wdbbo"/><path class="fi5wyfwwo"/><path class="n8qbuufsn"/></g>`,
		"fallback": "solar:siren-bold-duotone",
	});
}

export default Component;
