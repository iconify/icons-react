import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h86kn5bdk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h86kn5bdk"/>`,
		"fallback": "fluent-mdl2:triangle-left-12",
	});
}

export default Component;
