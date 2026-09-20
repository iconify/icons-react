import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgejtq3gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgejtq3gs"/>`,
		"fallback": "thesvg-color:magisk",
	});
}

export default Component;
