import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hebk_l4wm.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hebk_l4wm"/>`,
		"fallback": "fluent-mdl2:switcher-start-end",
	});
}

export default Component;
