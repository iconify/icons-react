import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz6upcgeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz6upcgeq"/>`,
		"fallback": "ri:microsoft-loop-fill",
	});
}

export default Component;
