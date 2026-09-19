import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kmkbqnfjz.css';
import '../../css/s/s666b4jgh.css';
import '../../css/b/b033__bbd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kmkbqnfjz"/><path class="s666b4jgh"/><path class="b033__bbd"/></g>`,
		"fallback": "fluent-emoji-flat:raised-hand",
	});
}

export default Component;
