import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsc84nzwy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsc84nzwy"/>`,
		"fallback": "streamline-color:new-folder-flat",
	});
}

export default Component;
