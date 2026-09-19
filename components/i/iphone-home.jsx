import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppe0v7y3u.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppe0v7y3u"/>`,
		"fallback": "el:iphone-home",
	});
}

export default Component;
