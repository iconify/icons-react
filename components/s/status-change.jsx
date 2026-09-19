import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i84evwbcm.css';
import '../../css/z/zej4k5jhq.css';
import '../../css/q/q9ug-zblj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i84evwbcm"/><path class="zej4k5jhq"/><path class="q9ug-zblj"/>`,
		"fallback": "carbon:status-change",
	});
}

export default Component;
