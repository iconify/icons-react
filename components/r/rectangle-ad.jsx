import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwe0zcczl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwe0zcczl"/>`,
		"fallback": "fa7-solid:rectangle-ad",
	});
}

export default Component;
