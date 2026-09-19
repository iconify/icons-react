import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyiav2-py.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyiav2-py"/>`,
		"fallback": "fluent-mdl2:parachute",
	});
}

export default Component;
