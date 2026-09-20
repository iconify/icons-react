import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr6-gac2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr6-gac2h"/>`,
		"fallback": "mingcute:omega-line",
	});
}

export default Component;
