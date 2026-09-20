import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb5e2cbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb5e2cbax"/>`,
		"fallback": "mingcute:layout-11-line",
	});
}

export default Component;
