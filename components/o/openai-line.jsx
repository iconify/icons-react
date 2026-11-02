import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw80cbc2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw80cbc2t"/>`,
		"fallback": "mingcute:openai-line",
	});
}

export default Component;
