import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqp_m4bni.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqp_m4bni"/>`,
		"fallback": "fa7-brands:vine",
	});
}

export default Component;
