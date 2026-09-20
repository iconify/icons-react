import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqitbw_2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqitbw_2f"/>`,
		"fallback": "mingcute:print-fill",
	});
}

export default Component;
