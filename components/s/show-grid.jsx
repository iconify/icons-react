import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw4fu-bty.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw4fu-bty"/>`,
		"fallback": "fluent-mdl2:show-grid",
	});
}

export default Component;
