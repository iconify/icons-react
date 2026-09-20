import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o05-o4bbk.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o05-o4bbk"/>`,
		"fallback": "lineicons:layout-26",
	});
}

export default Component;
