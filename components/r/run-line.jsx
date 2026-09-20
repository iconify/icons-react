import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyf_p3b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyf_p3b2j"/>`,
		"fallback": "mingcute:run-line",
	});
}

export default Component;
