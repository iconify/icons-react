import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdb0sxb4a.css';
import '../../css/x/x14f6wb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdb0sxb4a"/><path class="x14f6wb8c"/>`,
		"fallback": "mingcute:typhoon-line",
	});
}

export default Component;
