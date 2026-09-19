import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dajfk4b8b.css';
import '../../css/j/j81k_5xcc.css';
import '../../css/d/dlto2ybuj.css';
import '../../css/n/nx67zeblw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dajfk4b8b"/><circle transform="rotate(-22.5 187.997 291.992)" class="j81k_5xcc"/><path class="dlto2ybuj"/><path class="nx67zeblw"/>`,
		"fallback": "ion:logo-reddit",
	});
}

export default Component;
