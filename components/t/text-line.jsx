import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5cc15eec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5cc15eec"/>`,
		"fallback": "mingcute:text-line",
	});
}

export default Component;
