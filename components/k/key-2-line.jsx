import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olwdqqbhm.css';
import '../../css/d/d-e3iebub.css';
import '../../css/j/jawt9zm_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olwdqqbhm"/><path clip-rule="evenodd" class="d-e3iebub"/><path class="jawt9zm_h"/>`,
		"fallback": "mingcute:key-2-line",
	});
}

export default Component;
