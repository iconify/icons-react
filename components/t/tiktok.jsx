import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg8auor9g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg8auor9g"/>`,
		"fallback": "streamline:tiktok",
	});
}

export default Component;
