import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys0p6mg3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys0p6mg3k"/>`,
		"fallback": "lucide:laser",
	});
}

export default Component;
