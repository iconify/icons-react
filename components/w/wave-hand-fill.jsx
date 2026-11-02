import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btcvrsb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btcvrsb7s"/>`,
		"fallback": "mingcute:wave-hand-fill",
	});
}

export default Component;
