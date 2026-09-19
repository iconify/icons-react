import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1dt9pesp.css';

const viewBox = {"width":1024,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1dt9pesp"/>`,
		"fallback": "whh:vk",
	});
}

export default Component;
