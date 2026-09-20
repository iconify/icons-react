import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwam56gbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwam56gbp"/>`,
		"fallback": "mingcute:magic-2-line",
	});
}

export default Component;
