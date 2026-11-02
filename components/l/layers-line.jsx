import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc_hs6n6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc_hs6n6w"/>`,
		"fallback": "mingcute:layers-line",
	});
}

export default Component;
