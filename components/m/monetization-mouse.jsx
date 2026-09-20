import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w-_7j2b_b.css';
import '../../css/t/tghze73ng.css';
import '../../css/u/u26uafbbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w-_7j2b_b"/><path class="tghze73ng"/><path class="u26uafbbw"/></g>`,
		"fallback": "streamline-freehand-color:monetization-mouse",
	});
}

export default Component;
