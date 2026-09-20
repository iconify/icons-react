import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr4c9lt1j.css';
import '../../css/l/lp5zebcnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="rr4c9lt1j"/><path class="lp5zebcnh"/>`,
		"fallback": "lets-icons:message-alt-duotone-line",
	});
}

export default Component;
