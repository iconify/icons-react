import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnku-pbna.css';
import '../../css/s/sqo3g6whm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnku-pbna"/><path class="sqo3g6whm"/>`,
		"fallback": "mingcute:siri-fill",
	});
}

export default Component;
