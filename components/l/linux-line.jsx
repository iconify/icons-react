import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi7sqcbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi7sqcbph"/>`,
		"fallback": "mingcute:linux-line",
	});
}

export default Component;
