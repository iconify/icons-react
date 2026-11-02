import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itm8r4buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itm8r4buq"/>`,
		"fallback": "mingcute:scarf-line",
	});
}

export default Component;
