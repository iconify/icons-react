import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwjzuebfl.css';
import '../../css/b/bbwt9j4jc.css';
import '../../css/i/iqe7qjbhy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fwjzuebfl"/><path class="bbwt9j4jc"/><path class="iqe7qjbhy"/></g>`,
		"fallback": "fluent-emoji-flat:onion",
	});
}

export default Component;
