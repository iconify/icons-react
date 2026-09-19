import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8bygjb1r.css';
import '../../css/c/c8y7okrif.css';
import '../../css/d/d3fqriehb.css';
import '../../css/y/yga48zbfr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8bygjb1r"/><path class="c8y7okrif"/><path class="d3fqriehb"/><path class="yga48zbfr"/>`,
		"fallback": "fxemoji:turtle",
	});
}

export default Component;
