import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eylqw_b8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eylqw_b8h"/>`,
		"fallback": "mingcute:repeat-line",
	});
}

export default Component;
