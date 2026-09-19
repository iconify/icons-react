import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycf3u1r9n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycf3u1r9n"/>`,
		"fallback": "f7:tray-fill",
	});
}

export default Component;
