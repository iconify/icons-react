import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zog-z0bzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zog-z0bzq"/>`,
		"fallback": "mingcute:magic-2-fill",
	});
}

export default Component;
