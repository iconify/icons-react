import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjq44blgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjq44blgk"/>`,
		"fallback": "mingcute:tent-line",
	});
}

export default Component;
