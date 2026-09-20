import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7_ppxb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7_ppxb-x"/>`,
		"fallback": "mingcute:signature-2-ai-fill",
	});
}

export default Component;
