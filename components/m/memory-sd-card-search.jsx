import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t03zpmbmc.css';
import '../../css/g/gj580ybou.css';
import '../../css/i/iirl5cb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t03zpmbmc"/><path class="gj580ybou"/><path class="iirl5cb_a"/></g>`,
		"fallback": "streamline-freehand-color:memory-sd-card-search",
	});
}

export default Component;
