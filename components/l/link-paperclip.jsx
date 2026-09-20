import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-alys4rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-alys4rt"/>`,
		"fallback": "streamline-freehand:link-paperclip",
	});
}

export default Component;
