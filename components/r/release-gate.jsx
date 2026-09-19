import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7_i3eb6o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7_i3eb6o"/>`,
		"fallback": "fluent-mdl2:release-gate",
	});
}

export default Component;
