import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoyfc1bhb.css';
import '../../css/l/lqbe3zbxt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoyfc1bhb"/><path class="lqbe3zbxt"/>`,
		"fallback": "carbon:tag",
	});
}

export default Component;
