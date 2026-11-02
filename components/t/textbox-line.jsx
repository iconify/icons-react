import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r39k3lb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r39k3lb1a"/>`,
		"fallback": "mingcute:textbox-line",
	});
}

export default Component;
