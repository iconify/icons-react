import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxcq0gbtc.css';
import '../../css/n/n79s7ib_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxcq0gbtc"/><path clip-rule="evenodd" class="n79s7ib_n"/>`,
		"fallback": "solar:letter-opened-bold",
	});
}

export default Component;
