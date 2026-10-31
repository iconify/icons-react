import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjsde67-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjsde67-c"/>`,
		"fallback": "coolicons:strikethrough-fill-round",
	});
}

export default Component;
