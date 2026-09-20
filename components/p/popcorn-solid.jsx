import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf2-1wf3e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cf2-1wf3e"/>`,
		"fallback": "streamline:popcorn-solid",
	});
}

export default Component;
