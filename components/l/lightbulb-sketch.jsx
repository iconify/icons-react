import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zg5a7jb0o.css';
import '../../css/h/h6f3a38bp.css';
import '../../css/g/g02vaqb7b.css';
import '../../css/y/ygtalcb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zg5a7jb0o"/><path class="h6f3a38bp wm-k"/><path class="g02vaqb7b wm-k"/><path class="wm-a ygtalcb8y"/></g>`,
		"fallback": "withicons:lightbulb-sketch",
	});
}

export default Component;
