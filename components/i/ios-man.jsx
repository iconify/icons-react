import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2dtwdbdi.css';
import '../../css/s/sec7i9buu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2dtwdbdi"/><path class="sec7i9buu"/>`,
		"fallback": "ion:ios-man",
	});
}

export default Component;
