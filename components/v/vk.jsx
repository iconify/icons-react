import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1icg73ai.css';

const viewBox = {"width":876,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1icg73ai"/>`,
		"fallback": "ls:vk",
	});
}

export default Component;
