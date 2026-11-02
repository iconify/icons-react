import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziw9eiljc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziw9eiljc"/>`,
		"fallback": "mingcute:paint-brush-ai-fill",
	});
}

export default Component;
