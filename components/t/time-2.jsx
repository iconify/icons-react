import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yojol6byd.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yojol6byd"/>`,
		"fallback": "wi:time-2",
	});
}

export default Component;
