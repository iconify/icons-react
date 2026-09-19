import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwx_s704a.css';
import '../../css/q/qwe3y-4yj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwx_s704a"/><path class="qwe3y-4yj"/>`,
		"fallback": "carbon:non-certified",
	});
}

export default Component;
