import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p142kmbwe.css';
import '../../css/x/xo3mlcr-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p142kmbwe"/><path class="xo3mlcr-f"/>`,
		"fallback": "ion:ios-browsers",
	});
}

export default Component;
