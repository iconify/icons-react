import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tee2pe44x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tee2pe44x"/>`,
		"fallback": "mingcute:quill-pen-ai-fill",
	});
}

export default Component;
