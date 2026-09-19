import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8hq4cbew.css';
import '../../css/f/fdvxqhjjg.css';
import '../../css/a/avvv9ks9z.css';
import '../../css/l/lei2cq_1a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v8hq4cbew"/><path clip-rule="evenodd" class="fdvxqhjjg"/><path class="avvv9ks9z"/><path class="lei2cq_1a"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-dancing",
	});
}

export default Component;
