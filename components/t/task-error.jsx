import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx9aw1bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx9aw1bit"/>`,
		"fallback": "tdesign:task-error",
	});
}

export default Component;
