import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrk4wwb0u.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrk4wwb0u"/>`,
		"fallback": "fluent-mdl2:settings",
	});
}

export default Component;
