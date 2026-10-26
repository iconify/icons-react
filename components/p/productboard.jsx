import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khc6856kd.css';
import '../../css/o/oel1jvbgo.css';

const viewBox = {"width":64,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khc6856kd"/><path class="oel1jvbgo"/>`,
		"fallback": "thesvg:productboard",
	});
}

export default Component;
