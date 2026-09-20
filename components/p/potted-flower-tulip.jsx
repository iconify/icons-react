import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svbeqh7bg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svbeqh7bg"/>`,
		"fallback": "streamline:potted-flower-tulip",
	});
}

export default Component;
