import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg8k5ebzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg8k5ebzi"/>`,
		"fallback": "codicon:settings-gear",
	});
}

export default Component;
