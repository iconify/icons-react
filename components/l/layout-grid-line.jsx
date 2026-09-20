import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqpjr_b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqpjr_b4z"/>`,
		"fallback": "mingcute:layout-grid-line",
	});
}

export default Component;
