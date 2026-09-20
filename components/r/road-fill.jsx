import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owt8m26yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owt8m26yw"/>`,
		"fallback": "mingcute:road-fill",
	});
}

export default Component;
