import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pt6j8yqtd.css';
import '../../css/u/ua4c9ibli.css';
import '../../css/t/t418qsbpm.css';
import '../../css/y/yjjibyi4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pt6j8yqtd"/><path class="ua4c9ibli"/><path class="t418qsbpm"/><path class="yjjibyi4l"/></g>`,
		"fallback": "solar:reorder-2-line-duotone",
	});
}

export default Component;
