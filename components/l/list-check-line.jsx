import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eowd5-4tk.css';
import '../../css/k/kc1ovsb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eowd5-4tk"/><path class="kc1ovsb_n"/>`,
		"fallback": "mingcute:list-check-line",
	});
}

export default Component;
