import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uabn4_hhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uabn4_hhi"/>`,
		"fallback": "mingcute:pig-fill",
	});
}

export default Component;
