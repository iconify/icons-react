import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuub4hb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuub4hb9t"/>`,
		"fallback": "mingcute:seat-heated-line",
	});
}

export default Component;
