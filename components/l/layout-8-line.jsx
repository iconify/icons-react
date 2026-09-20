import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4z9h5b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4z9h5b-n"/>`,
		"fallback": "mingcute:layout-8-line",
	});
}

export default Component;
