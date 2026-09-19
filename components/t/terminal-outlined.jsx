import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1y8fp8ua.css';
import '../../css/l/lm9p31gmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1y8fp8ua"/><path class="lm9p31gmj"/>`,
		"fallback": "eos-icons:terminal-outlined",
	});
}

export default Component;
