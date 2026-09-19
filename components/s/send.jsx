import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb1-r1b9o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb1-r1b9o"/>`,
		"fallback": "fluent-mdl2:send",
	});
}

export default Component;
