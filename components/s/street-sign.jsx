import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b5h1ptb8y.css';
import '../../css/s/syhrxr0-o.css';
import '../../css/w/wwxjgoi9v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b5h1ptb8y"/><path class="syhrxr0-o"/><path class="wwxjgoi9v"/></g>`,
		"fallback": "streamline-flex-color:street-sign",
	});
}

export default Component;
