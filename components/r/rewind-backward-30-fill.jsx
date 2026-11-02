import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/depxg6s7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="depxg6s7o"/>`,
		"fallback": "mingcute:rewind-backward-30-fill",
	});
}

export default Component;
