import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obp0fjbkr.css';
import '../../css/w/w-keenbky.css';
import '../../css/r/rb_wcnqep.css';
import '../../css/h/h4c_9fbjc.css';
import '../../css/x/x8l-rqbaz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="obp0fjbkr"/><path class="w-keenbky"/><path class="rb_wcnqep"/><path class="h4c_9fbjc"/><path class="x8l-rqbaz"/></g>`,
		"fallback": "fluent-emoji-flat:mobile-phone",
	});
}

export default Component;
