import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/k/k0skn-9gi.css';
import '../../css/k/kv5hm5h9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="k0skn-9gi"/><path class="kv5hm5h9l"/></g>`,
		"fallback": "lets-icons:stop-and-play",
	});
}

export default Component;
