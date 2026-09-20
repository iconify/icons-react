import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw1e9dbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw1e9dbde"/>`,
		"fallback": "mingcute:layout-10-line",
	});
}

export default Component;
