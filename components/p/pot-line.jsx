import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew3ta5bdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew3ta5bdf"/>`,
		"fallback": "mingcute:pot-line",
	});
}

export default Component;
