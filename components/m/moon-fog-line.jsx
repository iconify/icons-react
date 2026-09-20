import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh9mg9beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh9mg9beq"/>`,
		"fallback": "mingcute:moon-fog-line",
	});
}

export default Component;
