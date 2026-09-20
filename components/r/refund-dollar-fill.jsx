import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu1amlj5r.css';
import '../../css/m/mn6i_fowy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu1amlj5r"/><path class="mn6i_fowy"/>`,
		"fallback": "mingcute:refund-dollar-fill",
	});
}

export default Component;
