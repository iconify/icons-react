import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0k1xbo6a.css';

const viewBox = {"width":680,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0k1xbo6a"/>`,
		"fallback": "ls:terminal",
	});
}

export default Component;
