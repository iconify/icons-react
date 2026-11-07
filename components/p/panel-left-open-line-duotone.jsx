import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j-3yojbro.css';
import '../../css/v/vbwan82rd.css';
import '../../css/b/b8tggowxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j-3yojbro"/><path class="vbwan82rd"/><path class="b8tggowxm"/></g>`,
		"fallback": "solar:panel-left-open-line-duotone",
	});
}

export default Component;
