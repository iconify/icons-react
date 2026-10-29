import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rc0kbryqd.css';
import '../../css/d/dotjycc0u.css';
import '../../css/y/yfxn1gspb.css';
import '../../css/c/c39ob_btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rc0kbryqd wm-k"/><path class="dotjycc0u wm-s"/><path class="yfxn1gspb"/><path class="c39ob_btd"/></g>`,
		"fallback": "withicons-bauhaus:reindeer",
	});
}

export default Component;
